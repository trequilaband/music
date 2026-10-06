document.getElementById('year').textContent = new Date().getFullYear();

/* Video: quando il reel e' online, incolla qui l'ID del video YouTube
   (la parte dopo "v=" nel link, es. dQw4w9WgXcQ). Finche' e' vuoto
   il sito mostra il rimando al canale. */
const YT_VIDEO_ID = '';

if (YT_VIDEO_ID) {
  const frame = document.getElementById('video-frame');
  frame.innerHTML =
    '<iframe src="https://www.youtube-nocookie.com/embed/' + YT_VIDEO_ID +
    '" title="Trequila Band, video" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
}

/* Lightbox galleria */
const box = document.getElementById('lightbox');
const boxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.g-item').forEach(function (btn) {
  btn.addEventListener('click', function () {
    boxImg.src = btn.dataset.full;
    boxImg.alt = btn.dataset.alt || '';
    if (typeof box.showModal === 'function') box.showModal();
  });
});

box.addEventListener('click', function () { box.close(); });
box.querySelector('.lightbox-close').addEventListener('click', function () { box.close(); });
