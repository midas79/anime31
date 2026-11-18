"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef(null);
  const router = useRouter();
  const pushSearch = () => {
    const v = searchRef.current?.value?.trim();
    if (!v) return;
    router.push(`/search/${encodeURIComponent(v)}`);
  };
  return (
    <form
      role="search"
      onSubmit={(e) => { e.preventDefault(); pushSearch(); }}
      className="relative w-full sm:w-80"
    >
      <input
        ref={searchRef}
        type="search"
        name="q"
        placeholder="Cari anime"
        aria-label="Cari anime"
        className="w-full h-10 rounded-full bg-surface border border-muted text-ink placeholder-muted text-sm px-4 pr-10 outline-none focus:border-accent transition-colors"
      />
      <button
        type="submit"
        aria-label="Cari"
        className="absolute right-1 top-1 w-8 h-8 flex items-center justify-center rounded-full text-muted hover:text-ink transition-colors"
      >
        <MagnifyingGlass size={16} />
      </button>
    </form>
  );
};

export default InputSearch;
