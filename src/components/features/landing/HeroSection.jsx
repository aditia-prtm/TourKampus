import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Aset Hero: Gambar Kampus Responsif & Awan
import awan1 from '../../../assets/hero/awan-1.png';
import awan2 from '../../../assets/hero/awan-2.png';
import awan3 from '../../../assets/hero/awan-3.png';
import awan4 from '../../../assets/hero/awan-4.png';
import awan5 from '../../../assets/hero/awan-5.png';
import unsriDesktopImg from '../../../assets/hero/unsri-desktop.png';
import unsriTabImg from '../../../assets/hero/unsri-tab.png';
import unsriMobileImg from '../../../assets/hero/unsri-mobile.png';

// Rombongan awan padat bertingkat persis seperti referensi laporUNSRI
// Menjamin bagian bawah awan penuh padat menyatu ke belakang gedung tanpa ada celah kosong
function SmallCloudBank() {
  return (
    <div className="relative shrink-0 w-[2600px] lg:w-[3400px] h-[520px] sm:h-[600px] lg:h-[680px] pointer-events-none select-none">
      {/* Alas kabut awan lembut di dasar (menjamin tidak ada celah biru di belakang gedung) */}
      <div className="absolute inset-x-0 bottom-0 h-[260px] sm:h-[320px] bg-gradient-to-t from-white/45 via-white/25 to-transparent blur-2xl pointer-events-none" />

      {/* TIER 1: AWAN DASAR (Menempel dari dasar, mengisi penuh area bawah agar tidak ada celah kosong) */}
      <img
        src={awan2}
        alt=""
        aria-hidden="true"
        className="absolute left-[0px] bottom-[-20px] w-[550px] lg:w-[720px] object-contain opacity-85 select-none"
      />
      <img
        src={awan5}
        alt=""
        aria-hidden="true"
        className="absolute left-[360px] lg:left-[480px] bottom-[10px] w-[580px] lg:w-[760px] object-contain opacity-90 select-none"
      />
      <img
        src={awan4}
        alt=""
        aria-hidden="true"
        className="absolute left-[780px] lg:left-[1040px] bottom-[-15px] w-[560px] lg:w-[740px] object-contain opacity-85 select-none"
      />
      <img
        src={awan1}
        alt=""
        aria-hidden="true"
        className="absolute left-[1200px] lg:left-[1600px] bottom-[5px] w-[580px] lg:w-[760px] object-contain opacity-90 select-none"
      />
      <img
        src={awan3}
        alt=""
        aria-hidden="true"
        className="absolute left-[1620px] lg:left-[2160px] bottom-[-20px] w-[550px] lg:w-[720px] object-contain opacity-85 select-none"
      />
      <img
        src={awan5}
        alt=""
        aria-hidden="true"
        className="absolute left-[2050px] lg:left-[2720px] bottom-[10px] w-[600px] lg:w-[780px] object-contain opacity-90 select-none"
      />

      {/* TIER 2: AWAN TENGAH (Mengisi ketinggian transisi antara atap dan puncak awan) */}
      <img
        src={awan1}
        alt=""
        aria-hidden="true"
        className="absolute left-[80px] lg:left-[120px] bottom-[85px] sm:bottom-[115px] lg:bottom-[140px] w-[420px] lg:w-[560px] object-contain opacity-85 select-none"
      />
      <img
        src={awan4}
        alt=""
        aria-hidden="true"
        className="absolute left-[520px] lg:left-[700px] bottom-[95px] sm:bottom-[125px] lg:bottom-[150px] w-[440px] lg:w-[580px] object-contain opacity-88 select-none"
      />
      <img
        src={awan2}
        alt=""
        aria-hidden="true"
        className="absolute left-[960px] lg:left-[1300px] bottom-[80px] sm:bottom-[110px] lg:bottom-[135px] w-[450px] lg:w-[600px] object-contain opacity-85 select-none"
      />
      <img
        src={awan3}
        alt=""
        aria-hidden="true"
        className="absolute left-[1420px] lg:left-[1900px] bottom-[100px] sm:bottom-[130px] lg:bottom-[155px] w-[430px] lg:w-[570px] object-contain opacity-88 select-none"
      />
      <img
        src={awan4}
        alt=""
        aria-hidden="true"
        className="absolute left-[1880px] lg:left-[2500px] bottom-[90px] sm:bottom-[120px] lg:bottom-[145px] w-[460px] lg:w-[620px] object-contain opacity-85 select-none"
      />

      {/* TIER 3: AWAN PUNCAK KECIL (Membingkai atap lebih pas persis laporUNSRI) */}
      <img
        src={awan2}
        alt=""
        aria-hidden="true"
        className="absolute left-[40px] lg:left-[60px] bottom-[195px] sm:bottom-[245px] lg:bottom-[300px] w-[280px] sm:w-[360px] lg:w-[460px] max-h-[170px] sm:max-h-[220px] lg:max-h-[270px] object-contain opacity-88 select-none"
      />
      <img
        src={awan3}
        alt=""
        aria-hidden="true"
        className="absolute left-[260px] lg:left-[360px] bottom-[215px] sm:bottom-[265px] lg:bottom-[320px] w-[260px] sm:w-[330px] lg:w-[420px] max-h-[150px] sm:max-h-[190px] lg:max-h-[240px] object-contain opacity-82 select-none"
      />
      <img
        src={awan5}
        alt=""
        aria-hidden="true"
        className="absolute left-[480px] lg:left-[660px] bottom-[205px] sm:bottom-[255px] lg:bottom-[310px] w-[300px] sm:w-[390px] lg:w-[490px] max-h-[170px] sm:max-h-[220px] lg:max-h-[270px] object-contain opacity-88 select-none"
      />
      <img
        src={awan1}
        alt=""
        aria-hidden="true"
        className="absolute left-[740px] lg:left-[1020px] bottom-[225px] sm:bottom-[275px] lg:bottom-[330px] w-[270px] sm:w-[350px] lg:w-[440px] max-h-[150px] sm:max-h-[200px] lg:max-h-[250px] object-contain opacity-82 select-none"
      />
      <img
        src={awan4}
        alt=""
        aria-hidden="true"
        className="absolute left-[980px] lg:left-[1340px] bottom-[210px] sm:bottom-[260px] lg:bottom-[315px] w-[290px] sm:w-[380px] lg:w-[480px] max-h-[160px] sm:max-h-[210px] lg:max-h-[260px] object-contain opacity-88 select-none"
      />
      <img
        src={awan2}
        alt=""
        aria-hidden="true"
        className="absolute left-[1240px] lg:left-[1700px] bottom-[220px] sm:bottom-[270px] lg:bottom-[325px] w-[280px] sm:w-[360px] lg:w-[460px] max-h-[160px] sm:max-h-[210px] lg:max-h-[260px] object-contain opacity-85 select-none"
      />
      <img
        src={awan3}
        alt=""
        aria-hidden="true"
        className="absolute left-[1500px] lg:left-[2060px] bottom-[205px] sm:bottom-[255px] lg:bottom-[310px] w-[260px] sm:w-[340px] lg:w-[430px] max-h-[150px] sm:max-h-[190px] lg:max-h-[240px] object-contain opacity-82 select-none"
      />
      <img
        src={awan5}
        alt=""
        aria-hidden="true"
        className="absolute left-[1740px] lg:left-[2380px] bottom-[225px] sm:bottom-[275px] lg:bottom-[330px] w-[310px] sm:w-[400px] lg:w-[500px] max-h-[170px] sm:max-h-[220px] lg:max-h-[270px] object-contain opacity-88 select-none"
      />
      <img
        src={awan1}
        alt=""
        aria-hidden="true"
        className="absolute left-[2040px] lg:left-[2780px] bottom-[210px] sm:bottom-[260px] lg:bottom-[315px] w-[280px] sm:w-[360px] lg:w-[450px] max-h-[150px] sm:max-h-[200px] lg:max-h-[250px] object-contain opacity-82 select-none"
      />
      <img
        src={awan4}
        alt=""
        aria-hidden="true"
        className="absolute left-[2320px] lg:left-[3140px] bottom-[215px] sm:bottom-[265px] lg:bottom-[320px] w-[290px] sm:w-[380px] lg:w-[480px] max-h-[160px] sm:max-h-[210px] lg:max-h-[260px] object-contain opacity-88 select-none"
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen-svh min-h-screen-svh overflow-hidden bg-gradient-to-b from-[#031d3d] via-[#083768] via-55% to-[#145fa8] flex flex-col items-center justify-center lg:justify-start">
      {/* LAYER 1: LANGIT (Biru Langit Realistis dengan Gradasi Alami & Horizon Atmosphere Bloom) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031d3d] via-[#083768] via-55% to-[#145fa8] z-0 select-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_65%_at_50%_65%,rgba(35,130,225,0.25),transparent_75%)] z-1 pointer-events-none select-none" />

      {/* LAYER 2: ROMBONGAN AWAN BERLAPIS MENYATU DARI DASAR HINGGA ATAP (ZERO GAP) */}
      <div className="absolute inset-x-0 bottom-0 z-10 pointer-events-none select-none overflow-hidden flex items-end">
        <motion.div
          className="flex w-max select-none"
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            duration: 180
          }}
        >
          <SmallCloudBank />
          <SmallCloudBank />
        </motion.div>
      </div>

      {/* LAYER 3: GAMBAR KAMPUS UNSRI RESPONSIF (Desktop: unsri-desktop, Tab: unsri-tab, Mobile: unsri-mobile) */}
      <div className="absolute inset-x-0 bottom-0 z-20 pointer-events-none select-none w-full">
        <picture className="w-full h-auto block select-none pointer-events-none">
          {/* Desktop: >= 1024px */}
          <source media="(min-width: 1024px)" srcSet={unsriDesktopImg} />
          {/* Tablet: >= 640px */}
          <source media="(min-width: 640px)" srcSet={unsriTabImg} />
          {/* Mobile: default fallback */}
          <img
            src={unsriMobileImg}
            alt="Kampus Universitas Sriwijaya"
            className="w-full h-auto block select-none pointer-events-none"
          />
        </picture>
      </div>

      {/* LAYER 4: KONTEN TEKS & TOMBOL (Mobile & Tab: Vertikal Center; Desktop: Pas di Langit Atas) */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 text-center space-y-3 sm:space-y-4 pt-0 lg:pt-56 xl:pt-44 select-text my-auto lg:my-0">
        {/* Heading persis gaya laporUNSRI: Font Poppins + Serif Italic */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl pt-7 font-extrabold tracking-tight text-white drop-shadow-2xl leading-tight font-['Poppins',sans-serif]">
          Travelling Salesman {' '}
          <span className="text-amber-400 italic font-serif font-extrabold drop-shadow-2xl text-3xl sm:text-4xl lg:text-5xl ml-1">
            Visualization
          </span>
        </h1>

        {/* Tombol Aksi Persis Style LaporUNSRI */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/campus"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#133e75] hover:bg-[#0f325e] text-white font-semibold text-xs sm:text-sm shadow-2xl shadow-blue-950/80 border border-blue-400/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Buka Peta Kampus</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/custom"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm backdrop-blur-md border border-white/30 drop-shadow-2xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Buat Graf Kustom</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
