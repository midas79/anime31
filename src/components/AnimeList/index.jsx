import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 py-6">
      {api.data?.map((anime, index) => {
        return (
          <Link
            href={`/${anime.mal_id}`}
            className="bg-accent block relative p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden group"
            key={index}
          >
            <Image
              src={anime.images.webp.image_url}
              alt={anime.title}
              width={400}
              height={600}
              className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
            />
            <h3 className="font-bold text-lg mt-2 text-center text-primary group-hover:text-blue-500 justify-center items-center transition-colors duration-300">
              {anime.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
