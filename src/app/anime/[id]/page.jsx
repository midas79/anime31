import { notFound } from "next/navigation";
import Image from "next/image";
import { getAnimeResponse } from "@/libs/api-libs";
import prisma from "@/libs/prisma";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import VideoPlayer from "@/components/Utilities/VideoPlayer";

const Stat = ({ label, value }) => (
  <div className="py-3 border-t border-rule">
    <dt className="label">{label}</dt>
    <dd className="num text-base font-bold text-ink mt-0.5">{value}</dd>
  </div>
);

const Meta = ({ term, value }) => (
  <div className="flex flex-col gap-0.5">
    <dt className="label">{term}</dt>
    <dd className="text-sm text-ink">{value}</dd>
  </div>
);

const Page = async ({ params }) => {
  const { id } = await params;
  if (!id || isNaN(Number(id))) notFound();
  const anime = await getAnimeResponse(`anime/${id}`);
  if (!anime?.data?.mal_id) notFound();
  let collection = null;
  try {
    collection = await prisma.collection.findFirst({ where: { anime_mal_id: String(id) } });
  } catch {
    collection = null;
  }
  const d = anime.data;

  return (
    <div className="shell py-8 flex flex-col gap-8">
      <header className="flex flex-col md:flex-row justify-between gap-4 items-start">
        <div className="min-w-0">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-ink leading-tight">{d.title}</h1>
          {d.title_english && d.title_english !== d.title && (
            <p className="text-sm text-muted mt-1">{d.title_english}</p>
          )}
          <p className="label mt-2">
            {d.type || "TV"}{d.status ? `, ${d.status.toLowerCase()}` : ""}
          </p>
          {d.genres?.length > 0 && (
            <ul className="flex flex-wrap gap-1.5 mt-3 list-none">
              {d.genres.map((g) => (
                <li key={g.mal_id} className="text-sm text-ink2 bg-surface px-2.5 py-1 rounded-full">
                  {g.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="shrink-0">
          <CollectionButton anime_mal_id={String(id)} anime_image={d.images.webp.image_url} anime_title={d.title} isCollected={!!collection} />
        </div>
      </header>

      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 max-w-3xl">
        <Stat label="Peringkat" value={d.rank ? `#${d.rank}` : "tidak ada"} />
        <Stat label="Skor" value={d.score ? `${d.score} / 10` : "belum dinilai"} />
        <Stat label="Anggota" value={d.members ? d.members.toLocaleString("id-ID") : "tidak ada"} />
        <Stat label="Episode" value={d.episodes ?? "?"} />
      </dl>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="frame w-full md:w-[240px] aspect-[3/4] shrink-0">
          <Image src={d.images.webp.large_image_url || d.images.webp.image_url} alt={d.title} fill className="object-cover" sizes="240px" priority />
        </div>
        <div className="flex flex-col gap-5 min-w-0">
          <section>
            <h2 className="text-base font-bold text-ink mb-2">Sinopsis</h2>
            <p className="text-sm leading-relaxed text-ink2 whitespace-pre-line max-w-[65ch]">
              {d.synopsis || "Belum ada sinopsis untuk judul ini."}
            </p>
          </section>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-3 pt-4 border-t border-rule">
            <Meta term="Durasi" value={d.duration || "tidak diketahui"} />
            <Meta term="Sumber" value={d.source || "tidak diketahui"} />
            <Meta term="Studio" value={d.studios?.[0]?.name || "tidak diketahui"} />
            <Meta term="Musim" value={d.season ? `${d.season.charAt(0).toUpperCase()}${d.season.slice(1)} ${d.year}` : "tidak diketahui"} />
            <Meta term="Batas umur" value={d.rating || "tidak diketahui"} />
            <Meta term="Tahun" value={d.year || "tidak diketahui"} />
          </dl>
        </div>
      </div>

      {d.trailer?.youtube_id && <VideoPlayer youtubeId={d.trailer.youtube_id} />}
    </div>
  );
};

export default Page;
