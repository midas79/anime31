import { Ghost, House } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = () => {
  return (
    <div className="shell min-h-[60vh] flex flex-col justify-center items-start gap-3 py-16">
      <Ghost size={40} className="text-muted" aria-hidden="true" />
      <h1 className="text-3xl font-bold text-ink">Halaman ini tidak ada</h1>
      <p className="text-ink2 max-w-sm">
        Alamatnya mungkin salah, atau halamannya sudah pindah.
      </p>
      <Link href="/" className="btn btn-primary mt-2">
        <House size={16} /> Ke beranda
      </Link>
    </div>
  );
};

export default Page;
