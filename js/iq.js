document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('iq-btn');
  const result = document.getElementById('iq-result');

  button.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => {
        // Используем случайное число для IQ от 80 до 160
        const iq = Math.floor(Math.random() * 80) + 80;
        const userName = data.results[0].name.first;
        result.innerHTML = `<h2>${userName}, ваш IQ: ${iq}</h2>
                            <p>${iq > 120 ? 'Вы гений!' : 'Продолжайте развиваться!'}</p>`;
      })
      .catch(() => {
        result.innerHTML = 'Ошибка при расчете IQ.';
      });
  });
});
