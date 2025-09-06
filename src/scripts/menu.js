document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('#mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      // Toggle the 'hidden' class on the menu panel
      mobileMenu.classList.toggle('hidden');
      
      // Toggle the 'active' class on the button itself
      hamburger.classList.toggle('active');

      // Prevent page scrolling when the menu is open
      // This is a simple but important feature we'll keep
      const isHidden = mobileMenu.classList.contains('hidden');
      document.body.style.overflow = isHidden ? 'auto' : 'hidden';
    });
  }
});