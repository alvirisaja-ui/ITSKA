import Link from 'next/link';

const programs = [
  ['teknologi-informasi', '⌘', 'Teknologi Informasi', 'Komputasi, jaringan, data, dan transformasi digital.'],
  ['rekayasa-perangkat-lunak', '⌁', 'Rekayasa Perangkat Lunak', 'Perancangan aplikasi, rekayasa sistem, dan pengujian perangkat lunak.'],
  ['teknik-industri', '⚙', 'Teknik Industri', 'Sistem produksi, optimasi proses, dan manajemen operasi.']
];

export default function Home() {
  return (
    <main>
      <div className="topline">PORTAL INFORMASI &amp; PENERIMAAN MAHASISWA BARU</div>

      <header className="nav wrap">
        <Link href="/" className="brand">
          <img src="/ITSA.png" alt="Logo ITSKA" className="logo" />
          <span>
            <b>ITSKA</b>
            <small>INSTITUT TEKNOLOGI SURAKARTA</small>
          </span>
        </Link>

        <nav>
          <a href="#tentang">Tentang</a>
          <a href="#program">Program</a>
          <Link href="/pmb/daftar" className="btn small">Daftar Sekarang ↗</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="wrap heroGrid">
          <div>
            <span className="pill">✦ PENDIDIKAN • TEKNOLOGI • MASA DEPAN</span>
            <h1>Temukan potensimu.<br /><em>Bangun masa depan.</em></h1>
            <p>Ruang untuk mengembangkan gagasan, keterampilan teknologi, dan semangat inovasi untuk menjawab tantangan masa depan.</p>
            <div className="actions">
              <Link className="btn" href="/pmb/daftar">Mulai Pendaftaran ↗</Link>
              <a className="btn ghost dark" href="#tentang">Jelajahi ITSKA</a>
            </div>
            <div className="heroMeta">● Pembelajaran berorientasi masa depan　 ● Kolaborasi dan inovasi</div>
          </div>

          <div className="heroArt">
            <div className="sun" />
            <div className="building">
              <div className="roof" />
              <div className="windows" />
              <div className="entrance" />
            </div>
            <div className="artLabel">
              <span className="dot" />
              <div>
                <b>ITSKA</b>
                <small>Learn · Create · Innovate</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap intro" id="tentang">
        <div>
          <span className="eyebrow">MENGENAL ITSKA</span>
          <h2>Teknologi untuk<br /><em>masa depan yang lebih baik.</em></h2>
        </div>
        <div className="introText">
          <p>Institut Teknologi Surakarta (ITSKA) dibangun dalam konsep website kampus modern dengan fokus pada pendidikan, eksplorasi teknologi, dan pengembangan solusi kreatif.</p>
          <p className="note">Profil, program studi, fasilitas, dan penerimaan pada website ini merupakan konten rancangan yang perlu diverifikasi sebelum digunakan sebagai informasi institusi resmi.</p>
        </div>
      </section>

      <section className="programSection" id="program">
        <div className="wrap">
          <div className="sectionHead">
            <div>
              <span className="eyebrow">JALUR AKADEMIK</span>
              <h2>Jelajahi bidang pilihanmu.</h2>
            </div>
            <p>Contoh bidang akademik untuk rancangan awal portal ITSKA.</p>
          </div>

          <div className="cards">
            {programs.map(([slug, icon, title, desc]) => (
              <Link href={'/program/' + slug} className="programCard" key={slug}>
                <span className="programIcon">{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="cardLink">Lihat detail ↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap cta">
        <div>
          <span className="eyebrow light">PENERIMAAN MAHASISWA BARU</span>
          <h2>Langkah pertamamu<br />dimulai di sini.</h2>
          <p>Isi formulir, simpan kartu peserta, lalu ikuti tahapan seleksi yang tersedia.</p>
        </div>
        <Link href="/pmb/daftar" className="btn white">Buka Portal PMB ↗</Link>
      </section>

      <footer>
        <div className="wrap footerGrid">
          <div className="brand footerBrand">
            <img src="/ITSA.png" alt="Logo ITSKA" className="logo" />
            <span>
              <b>ITSKA</b>
              <small>INSTITUT TEKNOLOGI SURAKARTA</small>
            </span>
          </div>

          <div>
            <b>Kontak</b>
            <p>Jl. Slamet Riyadi, Laweyan, Surakarta</p>
            <p><a href="mailto:info@itska.ac.id">info@itska.ac.id</a></p>
            <p><a href="tel:+6281215198788">0812-1519-8788</a></p>
          </div>

          <div>
            <b>Jelajahi</b>
            <p><Link href="/pmb/daftar">Pendaftaran</Link></p>
            <a href="#program">Program akademik</a>
          </div>
        </div>

        <div className="wrap copyright">
          © {new Date().getFullYear()} ITSKA • Website konsep yang dapat dikembangkan.
        </div>
      </footer>
    </main>
  );
}