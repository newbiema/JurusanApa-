// Dropdown Metode (Klik)
// Ambil elemen tombol dropdown dan isi dropdown
const metodeBtn = document.getElementById('metode-btn');
const metodeDropdown = document.getElementById('metode-dropdown');

// Ketika tombol dropdown diklik, toggle (tampilkan/sembunyikan) dropdown
metodeBtn.addEventListener('click', () => {
  metodeDropdown.classList.toggle('hidden');
});

// Ketika klik di mana saja di luar tombol dan dropdown, sembunyikan dropdown
window.addEventListener('click', function(e) {
  // Cek apakah klik bukan di dalam tombol atau dropdown
  if (!metodeBtn.contains(e.target) && !metodeDropdown.contains(e.target)) {
    metodeDropdown.classList.add('hidden');
  }
});


// Mobile Menu Toggle
// Ambil elemen tombol menu dan menu mobile
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Ketika tombol menu mobile diklik, toggle (tampilkan/sembunyikan) menu mobile
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});


// Tutup menu mobile saat klik salah satu link di dalamnya
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Sembunyikan menu setelah link diklik agar menu tidak tetap terbuka
    mobileMenu.classList.add('hidden');
  });
});
