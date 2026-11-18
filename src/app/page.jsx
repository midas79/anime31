import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import HeroBanner from "@/components/Hero/Banner";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

export const revalidate = 3600;

const Page = async () => {
  let topAnime = await getAnimeResponse("top/anime", "limit=18");

  if (!topAnime?.data?.length) {
    topAnime = await getAnimeResponse("seasons/now", "limit=18");
  }

  const heroFeatured = topAnime?.data?.[0];
  const listAnime = { data: topAnime?.data?.slice(1, 13) || [] };

  const shown = new Set((topAnime?.data || []).map((a) => a.mal_id));
  let rawRecs = await getNestedAnimeResponse("recommendations/anime", "entry");
  let recommendedAnime = reproduce(
    (rawRecs || []).filter((a) => !shown.has(a?.mal_id)),
    12
  );

  return (
    <div className="shell py-6">
      {heroFeatured && <HeroBanner anime={heroFeatured} />}

      <section className="mb-12">
        <Header title="Paling populer" linkTitle="Lihat semua" linkHref="/populer" />
        <AnimeList api={listAnime} />
      </section>

      {recommendedAnime?.data?.length > 0 && (
        <section className="mb-12">
          <Header title="Rekomendasi" />
          <AnimeList api={recommendedAnime} />
        </section>
      )}
    </div>
  );
};

export default Page;
