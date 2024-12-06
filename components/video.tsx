"use client";
import React, { useState } from "react";

interface VideoProps {
  onClick: () => void; // Função passada pelo componente pai
}

function Video({ onClick }: VideoProps) {
  const [showVideo, setShowVideo] = useState(false);

  const [showVideoDesktop, setShowVideoDesktop] = useState(false);

  const handleThumbnailClick = () => {
    setShowVideo(true); // Mostra o vídeo
    onClick(); // Notifica o componente pai sobre o clique
  };
  const handleDesktopClick = () => {
    setShowVideoDesktop(true); // Mostra o vídeo
    onClick(); // Notifica o componente pai sobre o clique
  };

  return (
    <div className=" flex z-[999] justify-center" style={{ cursor: "pointer" }}>
      {showVideo ? (
        <div>
          {/* Exibe o vídeo apenas em dispositivos móveis */}
          <div className="sm:block bg-[#0d0d0d] rounded-2xl md:hidden">
            {" "}
            <iframe
              width="auto"
              height="500"
              src="https://www.youtube.com/embed/CilPjv0knSY?autoplay=1" // Habilita autoplay
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl shadow-[2px_18px_32px_rgba(0,_0,_0,_0.5)] "
            ></iframe>
          </div>
        </div>
      ) : (
        <div>
          {/* Exibe a thumbnail apenas em dispositivos móveis */}
          <img
            src="https://img.youtube.com/vi/CilPjv0knSY/0.jpg" // Thumbnail gerado pelo YouTube
            alt="Video Thumbnail"
            className="rounded-2xl h-[500px] w-auto shadow-[2px_18px_32px_rgba(0,_0,_0,_0.5)] sm:block md:hidden"
            onClick={handleThumbnailClick} // Clique na imagem para exibir o vídeo
          />
        </div>
      )}
      {showVideoDesktop ? (
        <div>
          {/* Exibe o vídeo apenas em dispositivos maiores (notebooks e acima) */}
          <div className="hidden sm:hidden md:block">
            {" "}
            <iframe
              width="668"
              height="400"
              src="https://www.youtube.com/embed/fuCwKrVksZc?autoplay=1" // Habilita autoplay
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl shadow-[2px_18px_32px_rgba(0,_0,_0,_0.5)] "
            ></iframe>
          </div>
        </div>
      ) : (
        <div>
          {/* Exibe a thumbnail apenas em dispositivos maiores (notebooks e acima) */}
          <img
            src="https://i.ytimg.com/vi/6gr6UYsjkS4/maxresdefault.jpg
" // Thumbnail gerado pelo YouTube
            alt="Video Thumbnail"
            className="rounded-2xl h-[500px] w-auto shadow-[2px_18px_32px_rgba(0,_0,_0,_0.5)] hidden sm:hidden md:block"
            onClick={handleDesktopClick} // Clique na imagem para exibir o vídeo
          />
        </div>
      )}
    </div>
  );
}

export default Video;
