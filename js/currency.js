document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('currency');

  // Статические курсы валют для работы на GitHub Pages
  const data = {
    rates: {
      EUR: 0.91,
      GBP: 0.78,
      RUB: 82.5
    }
  };

  el.innerHTML = `
    <p>1 USD = ${data.rates.EUR} EUR</p>
    <p>1 USD = ${data.rates.GBP} GBP</p>
    <p>1 USD = ${data.rates.RUB} RUB</p>
  `;
});
