# Anime31

Platform pencarian dan koleksi anime sederhana dibangun dengan [Next.js](https://nextjs.org/), [Prisma](https://www.prisma.io/), [Tailwind CSS](https://tailwindcss.com/), dan [Jikan API](https://jikan.moe/).

## Fitur
- Cari anime melalui Jikan API.
- Detail anime lengkap (sinopsis, skor, peringkat, trailer).
- Koleksi anime pribadi (simpan/hapus) menggunakan database SQLite.
- Responsive design dengan Tailwind.

## Cara Menjalankan
1. Clone repo.
2. `npm install`.
3. Buat file `.env` (isi `DATABASE_URL="file:./dev.db"`).
4. `npx prisma db push`.
5. `npm run dev`.

## Tech Stack
- Framework: Next.js 15
- Database: SQLite (via Prisma ORM)
- UI/Styling: Tailwind CSS
- Icons: Phosphor Icons
- API: Jikan v4
