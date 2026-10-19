# ITSKA Portal — Next.js / Vercel

## Jalankan lokal
1. Instal Node.js LTS: https://nodejs.org
2. Ekstrak ZIP, buka terminal pada folder ini.
3. Jalankan `npm install`, lalu `npm run dev`.
4. Buka http://localhost:3000

## Deploy Vercel
Upload proyek ini ke GitHub, lalu impor repository di https://vercel.com/new. Vercel akan mendeteksi Next.js.

## Rute dinamis (slug)
- `/program/teknologi-informasi`
- `/program/rekayasa-perangkat-lunak`
- `/program/teknik-industri`
- `/pmb/daftar`
- `/pmb/kartu/ITSKA-TAHUN-KODE` (dibuat otomatis)
- `/pmb/ujian/ITSKA-TAHUN-KODE`
- `/pmb/hasil/ITSKA-TAHUN-KODE`

Catatan: starter ini menyimpan data pada localStorage browser, jadi data belum sinkron lintas perangkat dan belum memiliki database/admin. Untuk penerimaan sungguhan, tambahkan database, validasi server, autentikasi panitia, keamanan data, dan kebijakan privasi. Program studi dan materi tes dalam starter adalah contoh yang perlu diverifikasi. Jangan menyatakan hasil lokal ini sebagai hasil resmi SNBT/SNPMB; gunakan jalur mandiri ITSKA sampai kerja sama dan ketentuan resmi telah dipastikan.
