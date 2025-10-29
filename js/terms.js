document.addEventListener('DOMContentLoaded', () => {
  const termInput = document.getElementById('term-input');
  const termBtn = document.getElementById('term-btn');
  const result = document.getElementById('term-result');

  termBtn.addEventListener('click', () => {
    const term = termInput.value.trim();
    if (!term) return;

    result.innerHTML = 'Загрузка...';

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${term}`)
      .then(res => {
        if (!res.ok) throw new Error('Термин не найден');
        return res.json();
      })
      .then(data => {
        const meaning = data[0].meanings[0].definitions[0].definition;
        result.innerHTML = `<strong>${term}:</strong> ${meaning}`;
      })
      .catch(() => {
        result.innerHTML = `Термин "${term}" не найден.`;
      });
  });
});
