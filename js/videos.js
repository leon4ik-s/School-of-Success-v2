document.addEventListener('DOMContentLoaded', () => {
  const videos = [
    {title: 'Математика для начинающих', url: 'https://youtu.be/dQw4w9WgXcQ'},
    {title: 'Физика в повседневной жизни', url: 'https://youtu.be/dQw4w9WgXcQ'},
    {title: 'Программирование на Python', url: 'https://youtu.be/dQw4w9WgXcQ'},
    {title: 'История науки', url: 'https://youtu.be/dQw4w9WgXcQ'}
  ];

  const container = document.getElementById('videos');
  container.innerHTML = '';

  videos.forEach(video => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${video.title}</h3>
      <a href="${video.url}" target="_blank">Смотреть видео</a>
    `;
    container.appendChild(card);
  });
});
