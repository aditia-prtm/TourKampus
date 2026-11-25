/**
 * Teks statis, pseudocode, dan deskripsi edukatif untuk Traveling Salesperson Problem (TSP).
 * Studi Kasus: Rute Shuttle Bus Kampus Unsri Bukit Besar Palembang.
 * Fokus Algoritma Tunggal: Heuristik Greedy (Nearest Neighbor).
 */

export const APP_INFO = {
  title: 'TourKampus UNSRI',
  subtitle: 'Visualisasi & Optimasi Rute Kampus Unsri (Struktur Diskrit 2)',
  description:
    'Menemukan rute tertutup terpendek (Siklus Hamilton) yang mengunjungi setiap fakultas/gedung kampus tepat satu kali dan kembali ke titik awal menggunakan Algoritma Nearest Neighbor.',
  assumptions: [
    'Rute bersifat simetris (jarak A ke B sama dengan B ke A).',
    'Jarak antar gedung dihitung otomatis menggunakan formula Haversine (meter) berdasarkan koordinat GPS atau jarak jalan nyata.',
    'Setiap gedung/fakultas wajib dikunjungi tepat satu kali sebelum kembali ke titik asal (Siklus Hamilton).',
    'Perjalanan berangkat dan berakhir pada lokasi/gedung yang sama (closed tour).'
  ],
  realWorldExamples: [
    {
      title: 'Bus DAMRI Kampus Unsri',
      desc: 'Mengantar mahasiswa dari gerbang utama mengelilingi seluruh fakultas (FK, FH, Fasilkom, dll.) dengan rute terpendek.'
    },
    {
      title: 'Logistik & Distribusi Paket',
      desc: 'Kurir mengantarkan dokumen dan paket ke beberapa fakultas tanpa mendatangi lokasi yang sama dua kali.'
    },
    {
      title: 'Rute Inspeksi Gedung & Lab',
      desc: 'Petugas keamanan atau teknisi memeriksa sarana di setiap fasilitas kampus dengan urutan paling hemat waktu.'
    }
  ]
};

export const STEP_EXPLANATIONS = {
  matrix: {
    badge: 'Langkah 1: Matriks Jarak',
    concept: 'Representasi Matriks Jarak Berbobot',
    detail: 'Menghitung matriks jarak terpendek berpasangan antar seluruh fasilitas dan gedung di Kampus Unsri Palembang.'
  },
  'nn-start': {
    badge: 'Langkah 2: Titik Awal',
    concept: 'Inisialisasi Siklus Hamilton',
    detail: 'Menentukan lokasi keberangkatan awal rute tur keliling kampus.'
  },
  'nn-step': {
    badge: 'Langkah 3: Heuristik Greedy',
    concept: 'Pemilihan Lokasi Terdekat (Nearest Neighbor)',
    detail: 'Algoritma selalu memilih lokasi terdekat berikutnya yang belum dikunjungi untuk meminimalkan jarak tempuh secara lokal.'
  },
  'nn-complete': {
    badge: 'Langkah 4: Melengkapi Sirkuit',
    concept: 'Siklus Hamilton Terbentuk',
    detail: 'Seluruh fakultas telah dikunjungi tepat satu kali, rute kembali ke titik keberangkatan awal untuk melengkapi putaran.'
  },
  result: {
    badge: 'Langkah Terakhir: Hasil Rute',
    concept: 'Siklus Hamilton Terpendek (TSP)',
    detail: 'Rute final tur kampus beserta total jarak perjalanan yang berhasil dioptimasi menggunakan algoritma Nearest Neighbor.'
  }
};
