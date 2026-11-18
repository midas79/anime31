"use client";
import { useState } from "react";
import { BookmarkSimple, Check, SpinnerGap } from "@phosphor-icons/react";

const CollectionButton = ({ anime_mal_id, anime_image, anime_title, isCollected }) => {
  const [created, setCreated] = useState(isCollected);
  const [loading, setLoading] = useState(false);
  const handleCollection = async () => {
    setLoading(true);
    try {
      if (created) {
        const res = await fetch(`/api/v1/collection?id=${anime_mal_id}`, { method: "DELETE" });
        if (res.ok) setCreated(false);
      } else {
        const res = await fetch("/api/v1/collection", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ anime_mal_id, anime_image, anime_title }),
        });
        const j = await res.json();
        if (j.isCreated) setCreated(true);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      type="button"
      onClick={handleCollection}
      disabled={loading}
      className={`btn ${created ? "btn-secondary" : "btn-primary"}`}
    >
      {loading ? <SpinnerGap size={16} className="animate-spin" /> : created ? <Check size={16} /> : <BookmarkSimple size={16} />}
      {loading ? "Menyimpan" : created ? "Tersimpan" : "Simpan ke koleksi"}
    </button>
  );
};

export default CollectionButton;
