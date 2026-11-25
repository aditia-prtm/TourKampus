| Teknologi / Pustaka | Versi | Kategori | Lokasi Penggunaan Utama | Fungsi & Tujuan |
|---|---|---|---|---|
| **React** | `^19.3.1` | UI Framework | `src/` (seluruh komponen `.jsx`) | Membangun antarmuka berbasis komponen deklaratif, manajemen state reaktif, dan rendering visual. |
| **JavaScript** | `ES2022+` | Bahasa & Logika | `src/algorithms/` (`geo.js`, `distanceMatrix.js`, `nearestNeighbor.js`, `solveTSP.js`) | Mengimplementasikan logika matematika murni (rumus Haversine, Floyd-Warshall, Nearest Neighbor) tanpa dependensi UI. |
| **React Router DOM** | `^7.18.5` | Client-Side Routing | `src/App.jsx`, `src/components/common/Navbar.jsx`, `src/pages/LandingPage.jsx` | Navigasi SPA antarhalaman tanpa reload (`/` untuk Beranda, `/campus` untuk Peta Kampus, `/custom` untuk Graf Sendiri). |
| **TailwindCSS** | `^4.3.5` | Styling / CSS Engine | `src/index.css`, `vite.config.js` | Utility-first CSS untuk penataan layout, tema gelap, efek glow, badge, tabel, dan responsivitas layar. |
| **Leaflet** | `^1.9.4` | Map Engine | `src/components/map/LeafletMapView.jsx`, `src/index.css` | Engine pemetaan interaktif OpenStreetMap untuk menampilkan gedung, tikungan, ruas jalan, dan rute tur kampus. |
| **Framer Motion** | `^14.14.0` | Animasi | `src/pages/LandingPage.jsx`, `src/components/` | Menangani animasi transisi UI, slider profil tim, animasi awan hero, serta pergerakan rute dan penanda pada kanvas graf. |
| **Lucide React** | `^1.73.0` | Icon Pack | `src/components/`, `src/pages/` | Ikon visual SVG yang konsisten dan ringan (Play, Pause, Step, MapPin, Building, Trash, Link, dll.). |
| **SVG Interaktif** | `Native HTML5` | Canvas Rendering Graf | `src/components/graph/InteractiveGraphCanvas.jsx` | Kanvas graf kustom dengan sistem koordinat viewBox, drag-and-drop simpul, dan rendering garis sisi berbobot. |
