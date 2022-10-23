export class ExchangeCurrency {
  static async convertToNewCurrency(amount, newCurrency) {
    try {
      const resp = await ExchangeCurrency.makeRequest("GET", `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${newCurrency}`);
      const data = JSON.parse(resp);
      return `${amount * data.conversion_rate} ${newCurrency}`;
    } catch (e) {
      return e.statusText;
    }

  }

  static makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      request.open(method, url);
      request.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(request.response);
        } else {
          let errorText = "Error";
          const error = request.response;
          if (error) {
            errorText = error["error-type"];
          }
          reject({
            status: this.status,
            statusText: errorText
          });
        }
      };
      request.onerror = function () {
        reject({
          status: this.status,
          statusText: request.statusText
        });
      };
      request.send();
    });
  }
}