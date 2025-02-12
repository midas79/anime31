"use client";

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="text-accent min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={46} className="text-accent gap-4" />
        <h3 className="text-color-accent text-4xl font-bold">NOT FOUND</h3>
        <Link
          href="/"
          className="text-primary hover:text-accent transition-all underline"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default Page;
