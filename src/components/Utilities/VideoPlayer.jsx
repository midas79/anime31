"use client";
import { useState } from "react";
import YouTube from "react-youtube";
import { Play, X } from "@phosphor-icons/react";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`z-50 ${isOpen ? "fixed inset-0 bg-ground/95 flex items-center justify-center p-4" : ""}`}>
      {isOpen ? (
        <div className="relative w-full max-w-3xl aspect-video bg-ground rounded-lg overflow-hidden border border-rule">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 z-10 w-9 h-9 bg-surface rounded-full flex items-center justify-center text-ink hover:bg-raised transition-colors"
            aria-label="Tutup trailer"
          >
            <X size={18} />
          </button>
          <YouTube videoId={youtubeId} opts={{ width: "100%", height: "100%", playerVars: { autoplay: 1 } }} className="w-full h-full" />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="btn btn-primary"
        >
          <Play size={16} weight="fill" /> Tonton trailer
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
