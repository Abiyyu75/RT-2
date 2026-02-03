document.addEventListener('DOMContentLoaded', () => {

    // 1. FUNGSI ANIMASI COUNTER
    function animateCounter(id, endValue, duration) {
        const element = document.getElementById(id);
        if (!element) return;

        let start = 0;
        const stepTime = Math.abs(Math.floor(duration / endValue)); 

        const timer = setInterval(() => {
            start += 1;
            element.textContent = start;
            if (start >= endValue) {
                element.textContent = endValue;
                clearInterval(timer);
            }
        }, stepTime);
    }

    // 2. LOGIKA INTERSECTION OBSERVER
    const observerOptions = { threshold: 0.15 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan kelas visible untuk memicu animasi CSS
                entry.target.classList.add('visible');
                
                // Jika elemen yang terlihat adalah section stats, jalankan counter
                if (entry.target.classList.contains('stats')) {
                    animateCounter('stat-hari', 5, 1500);
                    animateCounter('stat-anggota', 10, 1500);
                    animateCounter('stat-destinasi', 8, 1500);
                }
                
                // Berhenti mengamati elemen ini setelah animasi dijalankan
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Targetkan semua elemen yang ingin diberi efek scroll
    const animatedElements = document.querySelectorAll('.lokasi-card, .peserta-card, .timeline-content, .refleksi-content, .galeri-item, .stats');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });

});
