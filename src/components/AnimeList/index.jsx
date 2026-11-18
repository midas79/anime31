import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  if (!api?.data?.length) {
    return <p className="text-center text-muted text-sm py-12 px-4">Tidak ada anime untuk ditampilkan.</p>;
  }
  return (
    <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 list-none">
      {api.data.map((anime, index) => (
        <li key={`${anime.mal_id}-${index}`} className="min-w-0">
          <Link
            href={`/anime/${anime.mal_id}`}
            className="group block rounded-lg transition-colors duration-150 hover:bg-surface"
          >
            <div className="frame aspect-[3/4] w-full">
              <Image
                src={anime.images.webp.image_url}
                alt={anime.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover"
              />
              {anime.score && (
                <span className="num absolute top-2 left-2 bg-ground/80 text-ink text-xs font-bold px-1.5 py-0.5 rounded">
                  {anime.score.toFixed(2)}
                </span>
              )}
            </div>
            <div className="px-1 pt-2 pb-1">
              <h3 className="text-sm font-bold leading-snug text-ink line-clamp-2">{anime.title}</h3>
              <p className="label mt-0.5">
                {anime.type || "TV"}{anime.year ? `, ${anime.year}` : ""}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
};

export default AnimeList;
