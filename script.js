document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.getElementById('header');

    // 1. Toggle Menu Hamburger untuk Mobile
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Efek Scroll Header (mengubah style saat di-scroll)
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'var(--bg-color)'; // Background gelap penuh saat di-scroll
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.5)';
        } else {
            header.style.backgroundColor = 'rgba(13, 13, 13, 0.8)'; // Transparan saat di atas
            header.style.boxShadow = 'none';
        }
    });

    // 3. Menutup menu saat link di-klik (hanya untuk mobile)
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });
});
