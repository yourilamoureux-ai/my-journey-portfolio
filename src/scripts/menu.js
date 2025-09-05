document.querySelector('.hamburger').addEventListener('click', () => {
  // Use the correct ID to find the menu
  const mobileMenu = document.querySelector('#mobile-menu');
  const hamburger = document.querySelector('.hamburger');

  // Toggle the 'expanded' class to show or hide the menu
  if (mobileMenu) {
    mobileMenu.classList.toggle('expanded');
  }

  // Toggle the 'active' class for the hamburger icon
  hamburger.classList.toggle('active');
});