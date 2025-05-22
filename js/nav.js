  // Dropdown Metode (Klik)
  const metodeBtn = document.getElementById('metode-btn');
  const metodeDropdown = document.getElementById('metode-dropdown');

  metodeBtn.addEventListener('click', () => {
    metodeDropdown.classList.toggle('hidden');
  });

  window.addEventListener('click', function(e) {
    if (!metodeBtn.contains(e.target) && !metodeDropdown.contains(e.target)) {
      metodeDropdown.classList.add('hidden');
    }
  });

  // Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Tutup menu saat klik link
  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });