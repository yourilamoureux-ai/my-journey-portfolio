document.querySelector('.hamburger').addEventListener('click', () => {
  const mobileMenu = document.querySelector('#mobile-menu');
  const hamburger = document.querySelector('.hamburger');

  if (mobileMenu) {
    mobileMenu.classList.toggle('expanded');
  }

  hamburger.classList.toggle('active');
});
