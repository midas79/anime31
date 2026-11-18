import Image from "next/image";
import Link from "next/link";
import { Play } from "@phosphor-icons/react/dist/ssr";

const HeroBanner = ({ anime }) => {
  if (!anime) return null;

  return (
    <section className="relative mb-10 rounded-xl overflow-hidden bg-well">
      <Image
        src={anime.images?.webp?.large_image_url || anime.images?.webp?.image_url}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-top opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ground via-ground/80 to-ground/20" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-ground via-transparent to-transparent" aria-hidden="true" />

      <div className="relative z-10 flex flex-col justify-end gap-3 p-6 md:p-10 max-w-xl min-h-[320px] md:min-h-[420px]">
        <p className="num text-sm text-ink2">
          Skor {anime.score ?? "-"}{anime.rank ? `, peringkat ${anime.rank}` : ""}
        </p>
        <h1 className="text-2xl md:text-4xl font-bold text-ink leading-tight">{anime.title}</h1>
        <p className="text-sm md:text-base text-ink2">
          {anime.synopsis ? `${anime.synopsis.slice(0, 180).trimEnd()}…` : "Anime paling populer minggu ini."}
        </p>
        <div className="pt-2">
          <Link href={`/anime/${anime.mal_id}`} className="btn btn-primary">
            <Play size={16} weight="fill" /> Detail anime
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
