export class ExchangeCurrency {
  async convertToNewCurrency(amount, newCurrency) {
    try {
      const resp = await this.makeRequest("GET", `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${newCurrency}`);
      const data = JSON.parse(resp);
      return `${amount * data.conversion_rate} ${newCurrency}`;
    } catch (e) {
      return e.statusText;
    }

  }