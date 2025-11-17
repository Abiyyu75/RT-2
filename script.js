// =================================================
// script.js: ANIMASI COUNTER & SCROLL EFFECTS
// =================================================

document.addEventListener('DOMContentLoaded', () => {

    // 1. FUNGSI ANIMASI COUNTER STATISTIK
    
    function animateCounter(id, endValue, duration) {
        const element = document.getElementById(id);
        if (!element) return;
        
        let start = 0;
        
        const stepTime = Math.max(1, Math.abs(Math.floor(duration / endValue))); 

        const timer = setInterval(() => {
            start += 1;
            element.textContent = start;
            if (start >= endValue) {
                element.textContent = endValue;
                clearInterval(timer);
            }
        }, stepTime);
    }

    // Nilai-nilai statistik
    const totalHari = 5;
    const totalAnggota = 10;
    const totalDestinasi = 7; // Diperbarui menjadi 7 sesuai jumlah Lokasi Card di HTML

    animateCounter('stat-hari', totalHari, 1500);
    animateCounter('stat-anggota', totalAnggota, 1500);
    animateCounter('stat-destinasi', totalDestinasi, 1500);


    // 2. LOGIKA EFEK SCROLL (Fade-in/Slide-up menggunakan Intersection Observer)

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan kelas 'visible' jika elemen muncul di viewport
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1
    });

    // Pilih semua elemen yang ingin diberi efek animasi
    document.querySelectorAll('.lokasi-card, .peserta-card, .timeline-content, .refleksi-content, .stat-card, .galeri-item').forEach(card => {
        // Set kondisi awal (tersembunyi dan sedikit turun)
        card.style.opacity = '0';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        card.style.transform = 'translateY(20px)';
        
        // Mulai mengamati elemen
        observer.observe(card);
    });

    // 3. SMOOTH SCROLLING NAVIGASI
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
});
