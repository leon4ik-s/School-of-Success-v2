document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('videos');
  container.innerHTML = 'Загрузка видео...';

  fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    .then(res => res.json())
    .then(videos => {
      container.innerHTML = '';
      videos.forEach(video => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <h3>${video.title}</h3>
          <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank">Смотреть видео</a>
        `;
        container.appendChild(card);
      });
    })
    .catch(() => {
      container.innerHTML = 'Ошибка загрузки видео.';
    });
});
