import Link from "next/link";
import InputSearch from "./InputSearch";
import { BookmarkSimple } from "@phosphor-icons/react/dist/ssr";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-ground/95 border-b border-rule">
      <div className="shell flex flex-wrap items-center gap-3 py-3">
        <Link href="/" aria-label="Beranda Anime31" className="text-xl font-bold tracking-tight text-ink">
          Anime<span className="text-accent">31</span>
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-sm font-bold">
          <Link href="/populer" className="text-muted hover:text-ink transition-colors">Populer</Link>
        </nav>
        <div className="flex items-center gap-3 ml-auto w-full sm:w-auto">
          <InputSearch />
          <Link href="/collection" className="btn btn-secondary">
            <BookmarkSimple size={16} /> Koleksi
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
