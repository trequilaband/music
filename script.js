document.getElementById('year').textContent = new Date().getFullYear();

/* Lightbox galleria */
const box = document.getElementById('lightbox');
const boxImg = document.getElementById('lightbox-img');

document.querySelectorAll('.g-item, .member-photo').forEach(function (btn) {
  btn.addEventListener('click', function () {
    boxImg.src = btn.dataset.full;
    boxImg.alt = btn.dataset.alt || '';
    if (typeof box.showModal === 'function') box.showModal();
  });
});

box.addEventListener('click', function () { box.close(); });
box.querySelector('.lightbox-close').addEventListener('click', function () { box.close(); });
