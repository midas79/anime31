import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-6 px-4 py-8">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/anime/${anime.mal_id}`}
             className="relative block bg-secondary rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-105 group w-full"
            key={index}
          >
            <div className="relative w-full h-64">
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
                {anime.title}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
