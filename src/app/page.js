import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  // Fetch data anime terpopuler
  const animeResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await animeResponse.json();

  // Fetch data karakter terpopuler
  const characterResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/characters?limit=8`
  );
  const topCharacters = await characterResponse.json();

  // Fetch data anime terbaru dengan parameter tambahan
  const newAnimeResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now`
    
  );
  const newAnime = await newAnimeResponse.json();

  return (
    <>
      {/* Anime Terpopuler */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>

      {/* Karakter Terpopuler */}
      <section>
        <Header
          title="Terbaru"
          linkTitle="Ikuti Sekarang"
          linkHref="/terbaru"
        />
        <AnimeList api={topCharacters} />
      </section>

      {/* Anime Terbaru */}
      <section>
        <Header
          title="Anime Terbaru"
          linkTitle="Tonton Sekarang"
          linkHref="/anime-terbaru"
        />
        <AnimeList api={newAnime} />
      </section>
    </>
  );
};

export default Page;
