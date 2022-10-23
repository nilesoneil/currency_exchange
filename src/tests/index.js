import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeCurrency from './currency_exchanger.js'

async function makeRequest() {
  function convertCurrency() {
    const amount = document.getElementById("dollars").value;
    const other = document.getElementById("otherCurrency").value;
    ExchangeCurrency.convertToNewCurrency(amount, other).then((converted) => {
      document.getElementById("convertedCurrency").innerHTML = converted;
    });
  }
  window.addEventListener('load', () => {
      document.getElementById("convertCurrency").addEventListener("click", convertCurrency);
  });
}
