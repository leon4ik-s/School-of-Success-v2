document.addEventListener('DOMContentLoaded', () => {
  const termInput = document.getElementById('term-input');
  const termBtn = document.getElementById('term-btn');
  const result = document.getElementById('term-result');

  // Простой словарь образовательных терминов
  const dictionary = {
    "Алгоритм": "Пошаговая последовательность действий для решения задачи.",
    "Педагогика": "Наука о воспитании, обучении и развитии человека.",
    "Методика": "Система приёмов и способов обучения.",
    "Программирование": "Создание программ для компьютеров и устройств.",
    "Мотивация": "Внутренние и внешние стимулы, побуждающие к действию."
  };

  termBtn.addEventListener('click', () => {
    const term = termInput.value.trim();
    if (dictionary[term]) {
      result.innerHTML = `<strong>${term}:</strong> ${dictionary[term]}`;
    } else {
      result.innerHTML = `Термин "${term}" не найден в словаре.`;
    }
  });
});
