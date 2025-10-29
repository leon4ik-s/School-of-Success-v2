document.addEventListener('DOMContentLoaded', () => {
  const termInput = document.getElementById('term-input');
  const termBtn = document.getElementById('term-btn');
  const result = document.getElementById('term-result');

  fetch('./data/terms.json')
    .then(res => res.json())
    .then(dictionary => {
      termBtn.addEventListener('click', () => {
        const term = termInput.value.trim();
        if (dictionary[term]) {
          result.innerHTML = `<strong>${term}:</strong> ${dictionary[term]}`;
        } else {
          result.innerHTML = `Термин "${term}" не найден в словаре.`;
        }
      });
    })
    .catch(() => {
      result.innerHTML = 'Ошибка загрузки словаря.';
    });
});
