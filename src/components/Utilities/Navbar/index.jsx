import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-accent">
      <div className="flex md:flex-row flex-col justify-between md:item-center p-4 gap-2">
        <Link href="/" className="font-bold text-2xl text-primary">
          Anime31
        </Link>
        <InputSearch/>
      </div>
    </header>
  );
};

export default Navbar;