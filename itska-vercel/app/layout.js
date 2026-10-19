import './globals.css';
import Link from 'next/link';

export const metadata = {
title: 'ITSKA | Institut Teknologi Surakarta',
description:
'Portal profil dan penerimaan mahasiswa Institut Teknologi Surakarta.',
};

function Header() {
return (
\<header className="nav wrap">
\<Link href="/" className="brand">
\<img        src="/ITSA.png"        alt="Logo ITSKA"        className="logo"      />
\<span>
\<b>ITSKA\</b>
\<small>INSTITUT TEKNOLOGI SURAKARTA\</small>
\</span>
\</Link>

```
  <nav>
    <Link href="/#tentang">Tentang</Link>
    <Link href="/#program">Program</Link>
    <Link href="/pmb/daftar" className="btn small">
      Daftar Sekarang ↗
    </Link>
  </nav>
</header>
```

);
}

function Footer() {
return (
\<footer>
\<div className="wrap footerGrid">
\<Link href="/" className="brand footerBrand">
\<img
&#x20;        src="/ITSA.png"
&#x20;        alt="Logo ITSKA"
&#x20;        className="logo"
&#x20;      />
\<span>
\<b>ITSKA\</b>
\<small>INSTITUT TEKNOLOGI SURAKARTA\</small>
\</span>
\</Link>

```
    <div>
      <b>Kontak</b>
      <p>Jl. Slamet Riyadi, Laweyan, Surakarta</p>
      <p>
        <a href="mailto:info@itska.ac.id">
          info@itska.ac.id
        </a>
      </p>
      <p>
        <a href="tel:+6281215198788">
          0812-1519-8788
        </a>
      </p>
    </div>

    <div>
      <b>Jelajahi</b>
      <p><Link href="/pmb/daftar">Pendaftaran</Link></p>
      <Link href="/#program">Program akademik</Link>
    </div>
  </div>

  <div className="wrap copyright">
    © {new Date().getFullYear()} ITSKA • Website konsep yang dapat dikembangkan.
  </div>
</footer>
```

);
}

export default function RootLayout({ children }) {
return (
\<html lang="id">
\<body>
\<Header />
{children}
\<Footer />
\</body>
\</html>
);
}
