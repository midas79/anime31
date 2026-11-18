"use client";

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState({});
  const [state, setState] = useState("loading");

  useEffect(() => {
    let isMounted = true;
    setState("loading");
    const timer = setTimeout(() => isMounted && setState("error"), 12000);
    getAnimeResponse("top/anime", `page=${page}`).then((data) => {
      clearTimeout(timer);
      if (isMounted) {
        setTopAnime(data);
        setState(data?.data?.length ? "full" : "error");
      }
    });
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [page]);

  return (
    <div className="shell py-8 pb-12">
      <HeaderMenu title={`Populer, halaman ${page}`} />
      {state === "loading" && (
        <div className="flex justify-center py-20" role="status">
          <div className="w-8 h-8 border-2 border-rule border-t-accent rounded-full animate-spin" />
        </div>
      )}
      {state === "error" && (
        <div className="py-16 flex flex-col items-start gap-3 max-w-sm">
          <p className="text-base font-bold text-ink">Daftar tidak termuat</p>
          <p className="text-sm text-ink2">
            Jikan API tidak menjawab. Coba muat ulang halaman, atau lihat daftar di beranda yang tersimpan lokal.
          </p>
        </div>
      )}
      {state === "full" && (
        <>
          <AnimeList api={topAnime} />
          <Pagination
            page={page}
            lastPage={topAnime?.pagination?.last_visible_page}
            setPage={setPage}
          />
        </>
      )}
    </div>
  );
};

export default Page;
