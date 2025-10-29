document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('iq-btn');
  const result = document.getElementById('iq-result');

  button.addEventListener('click', () => {
    const iq = Math.floor(Math.random() * 80) + 80; // 80–160
    result.innerHTML = `
      <h2>Ваш IQ: ${iq}</h2>
      <p>${iq > 120 ? 'Вы гений!' : 'Продолжайте развиваться!'}</p>
    `;
  });
});
