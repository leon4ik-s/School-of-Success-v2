document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('iq-btn');
  const result = document.getElementById('iq-result');

  button.addEventListener('click', () => {
    fetch('./data/iq.json')
      .then(res => res.json())
      .then(data => {
        const iq = Math.floor(Math.random() * (data.iqMax - data.iqMin + 1)) + data.iqMin;
        result.innerHTML = `<h2>Ваш IQ: ${iq}</h2>
                            <p>${iq > 120 ? 'Вы гений!' : 'Продолжайте развиваться!'}</p>`;
      })
      .catch(() => {
        result.innerHTML = 'Ошибка при расчете IQ.';
      });
  });
});
