// Toggle Dark Mode / Light Mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    // Sebagai contoh dasar, ini hanya mengganti warna background konten.
    // Pada project asli, kamu bisa menambahkan class .dark-mode ke body 
    // dan mengaturnya di CSS.
    
    if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        body.style.setProperty('--bg-light', '#121212');
        body.style.setProperty('--card-bg', '#1e1e1e');
        body.style.setProperty('--text-dark', '#ffffff');
        body.style.setProperty('--border-color', '#333333');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        body.style.setProperty('--bg-light', '#f8f9fa');
        body.style.setProperty('--card-bg', '#ffffff');
        body.style.setProperty('--text-dark', '#333333');
        body.style.setProperty('--border-color', '#eaeaea');
    }
});