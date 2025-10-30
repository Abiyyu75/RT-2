public class DokumentasiEkspedisi {

    public static void main(String[] args) {
        
        // Konstanta Data Ekspedisi
        final String NAMA_SEKOLAH = "SMPIP Baitul Maal";
        final String KELOMPOK = "Kelompok RT 02, Kelas 9";
        final String TANGGAL = "10 - 14 November 2025 (5 Hari)";
        final String MOTTO = "\"Bersama kita jelajahi, bersama kita belajar, bersama kita tumbuh.\"";

        // Memanggil fungsi untuk mencetak header
        cetakHeader(NAMA_SEKOLAH, KELOMPOK, TANGGAL, MOTTO);

        // Memanggil fungsi untuk mencetak timeline
        cetakTimeline();

        // Memanggil fungsi untuk mencetak peserta
        cetakPeserta();

        // Memanggil fungsi untuk mencetak lokasi
        cetakLokasi();
    }

    /**
     * Mencetak bagian Header dan Overview.
     * @param sekolah Nama sekolah
     * @param kelompok Nama kelompok
     * @param tanggal Tanggal ekspedisi
     * @param motto Motto kelompok
     */
    public static void cetakHeader(String sekolah, String kelompok, String tanggal, String motto) {
        System.out.println("\n=======================================================");
        System.out.println("          🏔️ DOKUMENTASI EKSPEDISI MALANG 2025         ");
        System.out.println("=======================================================");
        System.out.println("Sekolah   : " + sekolah);
        System.out.println("Kelompok  : " + kelompok);
        System.out.println("Tanggal   : " + tanggal);
        System.out.println("-------------------------------------------------------");
        System.out.println("Motto Tim : " + motto);
        System.out.println("-------------------------------------------------------\n");
    }

    /**
     * Mencetak Timeline/Linimasa Kegiatan.
     */
    public static void cetakTimeline() {
        System.out.println("=== 📅 LINIMASA KEGIATAN (TIMELINE) ===");
        
        String[] timeline = {
            "10 NOV (H-1): Pelepasan, Keberangkatan Stasiun Senen - Malang, Eksplorasi Kampung Warna Warni Jodipan.",
            "11 NOV (H-2): Eksplorasi Museum Brawijaya, Pembukaan di Balai Desa, Games dan Edukasi anak-anak TPA.",
            "12 NOV (H-3): Penyuluhan 7+1 Kebiasaan, Kelas Inspirasi Desa (Kerajinan), Games & Edukasi anak-anak SD.",
            "13 NOV (H-4): BPJS (Bersih-bersih Perkampungan), Closing Desa, Eksplorasi Perkebunan Apel & Museum Angkut.",
            "14 NOV (H-5): Perjalanan Pulang Malang - Senen, Tiba kembali di SMPIP Baitul Maal."
        };

        for (String item : timeline) {
            System.out.println(" -> " + item);
        }
        System.out.println("\n");
    }

    /**
     * Mencetak Daftar Peserta Ekspedisi.
     */
    public static void cetakPeserta() {
        System.out.println("=== 🧑‍🤝‍🧑 ANGGOTA EKSPEDISI RT 02 ===");
        
        String[][] peserta = {
            {"Pak Reza Sa'adi, S.Pd", "Guru Fasilitator", "Pembimbing Edukasi"},
            {"Muhammad Kenzie Narendra", "Ketua RT 02", "Pemimpin Kelompok"},
            {"Abiyyu Nawwaf Almujaddid", "Warga (Dokumentasi)", "Dokumentasi & Fotografi"},
            {"Muhammad Alfrazi Wijaya", "Warga (Transportasi)", "Koordinator Transportasi"},
            {"Ghaisan Aulia Hakim Adrimasyah", "Warga (Sekretaris)", "Sekretaris Kegiatan"},
            {"Nadhif Bazily Arham", "Warga (Bendahara)", "Bendahara Kelompok"},
            {"Mohamad Tsani Akbar", "Warga (Konsumsi)", "Koordinator Konsumsi"},
            {"Fakhry Zhafran Khairi", "Warga (Keamanan)", "Koordinator Keamanan"},
            {"Gibran Hady Wibowo", "Warga (Acara)", "Koordinator Acara"},
            {"Utbah Syamil Rabbani", "Warga (Perlengkapan)", "Koordinator Perlengkapan"}
        };

        System.out.printf("| %-30s | %-20s | %-25s |\n", "NAMA LENGKAP", "JABATAN", "PERAN KHUSUS");
        System.out.println("|" + "--------------------------------" + "|" + "----------------------" + "|" + "-------------------------|");
        
        for (String[] p : peserta) {
            System.out.printf("| %-30s | %-20s | %-25s |\n", p[0], p[1], p[2]);
        }
        System.out.println("\n");
    }

    /**
     * Mencetak Daftar Lokasi Kunjungan.
     */
    public static void cetakLokasi() {
        System.out.println("=== 🗺️ LOKASI KUNJUNGAN & NILAI EDUKASI ===");
        
        String[] lokasi = {
            "Dusun Maron (Titik Kumpul): Nilai Disiplin & Kebersamaan.",
            "Stasiun Pasar Senen & Malang Kota Baru: Nilai Tanggung Jawab & Manajemen Waktu.",
            "Kampung Warna-Warni Jodipan: Nilai Kreativitas & Kewirausahaan Sosial.",
            "Museum Brawijaya: Nilai Nasionalisme & Patriotisme (Sejarah Perjuangan).",
            "Museum Angkut: Nilai Perkembangan Teknologi & Sejarah Global.",
            "Desa Pujon Lor: Nilai Empati, Komunikasi, dan Pengabdian Masyarakat."
        };

        for (String l : lokasi) {
            System.out.println(" * " + l);
        }
        System.out.println("\n=======================================================\n");
    }
}