
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const dialog = document.querySelector('#lightbox');
const dialogImg = dialog.querySelector('img');
document.querySelectorAll('.gallery button').forEach(button => {
  button.addEventListener('click', () => {
    const img = button.querySelector('img');
    dialogImg.src = img.src;
    dialogImg.alt = img.alt;
    dialog.showModal();
  });
});
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => {
  if (e.target === dialog) dialog.close();
});
