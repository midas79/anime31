import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 py-6">
      {/* Check if api and api.data exist and if api.data is an array with elements */}
      {api && Array.isArray(api.data) && api.data.length > 0 ? (
        api.data.map((anime) => (
          <Link 
            key={anime.mal_id} 
            href={`/${anime.mal_id}`} 
            className="block relative p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden group"
          >
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
