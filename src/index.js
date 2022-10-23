import {ExchangeCurrency} from './currency_exchanger.js'

async function makeRequest() {
    const amount = document.getElementById("userInput").value;
    const other = document.getElementById("currencies").value;
    ExchangeCurrency.convertToNewCurrency(amount, other).then((converted) => {
      document.getElementById("showResponse").innerHTML = converted;
    }); 
  }
  window.addEventListener('load', () => {
      document.getElementById("convertCurrency").addEventListener("click", makeRequest);
  });
