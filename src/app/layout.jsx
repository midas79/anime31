import { Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Anime31, katalog anime",
  description:
    "Katalog anime: cari judul, lihat yang populer, simpan ke koleksi. Data dari Jikan API.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="mt-16 border-t border-rule bg-well/40">
            <div className="shell py-10 flex flex-col md:flex-row justify-between gap-8">
              <div className="max-w-sm">
                <p className="text-xl font-bold tracking-tight">
                  Anime<span className="text-accent">31</span>
                </p>
                <p className="text-sm text-muted mt-2">
                  Katalog anime dengan data langsung dari Jikan API. Cari, bandingkan, simpan ke koleksi.
                </p>
              </div>
              <div className="flex gap-10 text-sm">
                <div className="flex flex-col gap-2">
                  <a href="/" className="text-muted hover:text-ink transition-colors">Beranda</a>
                  <a href="/populer" className="text-muted hover:text-ink transition-colors">Populer</a>
                  <a href="/collection" className="text-muted hover:text-ink transition-colors">Koleksi</a>
                </div>
                <div className="flex flex-col gap-2">
                  <a href="https://jikan.moe" target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition-colors">Jikan API</a>
                  <a href="https://myanimelist.net" target="_blank" rel="noreferrer" className="text-muted hover:text-ink transition-colors">MyAnimeList</a>
                </div>
              </div>
            </div>
            <div className="border-t border-rule py-4">
              <p className="shell text-center text-sm text-muted">
                {new Date().getFullYear()} Anime31
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
