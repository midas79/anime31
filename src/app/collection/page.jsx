import Image from "next/image";
import Link from "next/link";
import prisma from "@/libs/prisma";

const Page = async () => {
  let collection = [];
  try {
    collection = await prisma.collection.findMany({ orderBy: { id: "desc" } });
  } catch {
    collection = [];
  }
  return (
    <section className="shell py-8">
      <div className="flex flex-wrap justify-between items-baseline gap-3 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">Koleksi saya</h1>
        <p className="num text-sm text-muted">{collection.length} tersimpan</p>
      </div>

      {collection.length === 0 ? (
        <div className="py-16 flex flex-col items-start gap-3 max-w-sm">
          <p className="text-base font-bold text-ink">Belum ada yang disimpan</p>
          <p className="text-sm text-ink2">
            Buka daftar populer atau cari judul, lalu tekan Simpan ke koleksi.
          </p>
          <Link href="/" className="btn btn-primary mt-1">Cari anime</Link>
        </div>
      ) : (
        <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 list-none">
          {collection.map((collect) => (
            <li key={collect.id} className="min-w-0">
              <Link
                href={`/anime/${collect.anime_mal_id}`}
                className="group block rounded-lg transition-colors duration-150 hover:bg-surface"
              >
                <div className="frame aspect-[3/4]">
                  <Image
                    src={collect.anime_image || ""}
                    alt={collect.anime_title || "Anime"}
                    fill
                    sizes="(max-width: 640px) 50vw, 16vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-1 pt-2 pb-1">
                  <h2 className="text-sm font-bold leading-snug text-ink line-clamp-2">{collect.anime_title}</h2>
                  <p className="label mt-0.5">MAL {collect.anime_mal_id}</p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
};

export default Page;
