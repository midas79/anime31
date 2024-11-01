import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid justify-start grid-cols-2 gap-3 px-4 py-4 overflow-auto sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
            className="hover:scale-[100.5%] hover:shadow-lg transition-transform ease-in-out relative max-w-[300px] w-full mx-auto overflow-hidden noborder rounded-lg shadow-md bg-secondary"
            key={index}
          >
            <div className="relative overflow-hidden h-[250px] md:h-[420px]">
              <Image
                src={anime.images.webp.image_url}
                alt={anime.title}
                layout="fill"
                objectFit="cover"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-md font-semibold text-primary text-center transition-colors duration-300 group-hover:text-blue-600">
                {anime.title && anime.title.length >= 35
                  ? `${anime.title.slice(0, 25)}...`
                  : anime.title || "title not available."}
              </h3>
              <p className="mt-2 text-primary h-auto overflow-hidden text-ellipsis">
                {anime.synopsis && anime.synopsis.length > 100
                  ? `${anime.synopsis.slice(0, 90)}...`
                  : anime.synopsis}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
