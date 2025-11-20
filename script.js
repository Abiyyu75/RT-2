// =================================================
// script.js: ANIMASI COUNTER & SCROLL EFFECTS (FIXED)
// =================================================

document.addEventListener('DOMContentLoaded', () => {

    // Nilai-nilai statistik yang akan dianimasikan
    const STATS = {
        'stat-hari': 5,
        'stat-anggota': 10,
        'stat-destinasi': 8
    };

    /* 1. FUNGSI ANIMASI COUNTER STATISTIK */

    /**
     * Menganimasikan hitungan dari 0 hingga endValue.
     */
    function animateCounter(id, endValue, duration = 1500) {
        const element = document.getElementById(id);
        let start = 0;
        
        // Menghitung interval waktu untuk setiap langkah (step)
        const stepTime = Math.max(1, Math.abs(Math.floor(duration / endValue))); 

        const timer = setInterval(() => {
            start += 1;
            element.textContent = start;
            if (start === endValue) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    // Status untuk memastikan counter hanya berjalan sekali
    let statsAnimated = false;

    /* 2. LOGIKA EFEK SCROLL & TRIGGER COUNTER */

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                // --- A. Logika Animasi Counter ---
                if (entry.target.classList.contains('stats') && !statsAnimated) {
                    for (const id in STATS) {
                        animateCounter(id, STATS[id], 1500);
                    }
                    statsAnimated = true; // Set status agar tidak terulang
                }

                // --- B. Logika Scroll Effect (Fade-in/Slide-up) ---
                entry.target.classList.add('visible');
                
                // Berhenti mengamati setelah elemen terlihat (kecuali stats)
                if (!entry.target.classList.contains('stats')) {
                    observer.unobserve(entry.target);
                }
            }
        });
    }, {
        // threshold 0.1 berarti 10% dari elemen harus terlihat sebelum memicu
        threshold: 0.1
    });

    // 3. INISIALISASI EFEK SCROLL

    // Pilih semua elemen yang ingin diberi efek animasi
    const elementsToAnimate = document.querySelectorAll(
        '.stat-card, .lokasi-card, .peserta-card, .timeline-content, .refleksi-content, .galeri-item'
    );

    elementsToAnimate.forEach(card => {
        // Set kondisi awal (tersembunyi dan sedikit turun)
        card.style.opacity = '0';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        card.style.transform = 'translateY(20px)';
        
        // Mulai mengamati elemen
        scrollObserver.observe(card);
    });

    // Amati juga container stats untuk memicu counter
    scrollObserver.observe(document.querySelector('.stats'));

});
