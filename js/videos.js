const videos = [
  {title: 'Математика для начинающих', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'},
  {title: 'Физика в повседневной жизни', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'},
  {title: 'Программирование на Python', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
];

const container = document.getElementById('videos');
container.innerHTML = '';

videos.forEach(video => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h3>${video.title}</h3>
                    <a href="${video.url}" target="_blank">Смотреть</a>`;
  container.appendChild(card);
});
