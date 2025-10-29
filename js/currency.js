fetch('https://api.exchangerate.host/latest?base=USD&symbols=EUR,GBP,RUB')
  .then(res => res.json())
  .then(data => {
    const el = document.getElementById('currency');
    el.innerHTML = `
      <p>1 USD = ${data.rates.EUR} EUR</p>
      <p>1 USD = ${data.rates.GBP} GBP</p>
      <p>1 USD = ${data.rates.RUB} RUB</p>
    `;
  })
  .catch(() => {
    document.getElementById('currency').innerHTML = 'Ошибка загрузки курса валют.';
  });
