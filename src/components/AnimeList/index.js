import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data.map((anime) => {
        return (
          <Link href={`/${anime.mal_id}`} className="cursor-pointer">
            <Image
              src={anime.images.webp.image_url}
              alt={anime.title}
              width={400}
              height={600}
              className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
            />
            <h3 className="font-bold text-lg mt-2 text-center text-gray-800 group-hover:text-blue-500 transition-colors duration-300">{anime.title}</h3>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
          </Link>
        ))
      ) : (
        <p className="text-center col-span-full">Loading or no data available.</p>
      )}
    </div>
  );
};

export default AnimeList;
