
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


const languageSelector = document.querySelector('.language-selector');
const languageButton = document.querySelector('.language-toggle');
const languageMenu = document.querySelector('.language-menu');
if (languageSelector && languageButton && languageMenu) {
  languageButton.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = languageMenu.classList.toggle('open');
    languageButton.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', (event) => {
    if (!languageSelector.contains(event.target)) {
      languageMenu.classList.remove('open');
      languageButton.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      languageMenu.classList.remove('open');
      languageButton.setAttribute('aria-expanded', 'false');
      languageButton.focus();
    }
  });
}

document.addEventListener('DOMContentLoaded',()=>{const y=document.getElementById('copyright-year');if(y)y.textContent=new Date().getFullYear();});
