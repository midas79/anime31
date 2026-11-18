import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";

const Page = async ({ params }) => {
  const { keyword } = await params;
  const decodedKeyword = decodeURIComponent(keyword || "");
  const searchAnime = await getAnimeResponse("anime", `q=${encodeURIComponent(decodedKeyword)}&limit=24&sfw`);

  return (
    <div className="shell py-8">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-ink mb-6">
        Hasil untuk &ldquo;{decodedKeyword}&rdquo;
      </h1>
      {!searchAnime.data?.length ? (
        <div className="py-16 flex flex-col items-start gap-3 max-w-sm">
          <MagnifyingGlass size={32} className="text-muted" aria-hidden="true" />
          <p className="text-base font-bold text-ink">Tidak ada hasil</p>
          <p className="text-sm text-ink2">
            Tidak ada anime untuk &ldquo;{decodedKeyword}&rdquo;. Coba kata kunci lain, atau cek ejaannya.
          </p>
        </div>
      ) : (
        <AnimeList api={searchAnime} />
      )}
    </div>
  );
};

export default Page;
