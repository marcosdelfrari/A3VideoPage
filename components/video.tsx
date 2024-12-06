"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import do componente Image
import { videoData } from "@/lib/data"; // Atualize o caminho conforme sua estrutura de pastas

interface VideoProps {
  onClick: () => void;
}

function Video({ onClick }: VideoProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [showVideoDesktop, setShowVideoDesktop] = useState(false);

  const handleThumbnailClick = () => {
    setShowVideo(true);
    onClick();
  };

  const handleDesktopClick = () => {
    setShowVideoDesktop(true);
    onClick();
  };

  return (
    <div className="flex z-[999] justify-center" style={{ cursor: "pointer" }}>
      {showVideo ? (
        <div>
          <div className="sm:block bg-[#0d0d0d] rounded-2xl md:hidden">
            <iframe
              width="auto"
              height="500"
              src={videoData.mobile.videoUrl}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl shadow-[2px_18px_32px_rgba(0,_0,_0,_0.5)]"
            ></iframe>
          </div>
        </div>
      ) : (
        <div>
          <Image
            src={videoData.mobile.thumbnail}
            alt="Video Thumbnail"
            width={302}
            height={500} // Ajuste as dimensões conforme necessário
            className="rounded-2xl shadow-[2px_18px_32px_rgba(0,_0,_0,_0.5)] sm:block md:hidden"
            onClick={handleThumbnailClick}
          />
        </div>
      )}
      {showVideoDesktop ? (
        <div>
          <div className="hidden sm:hidden md:block">
            <iframe
              width="960"
              height="540"
              src={videoData.desktop.videoUrl}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl shadow-[2px_18px_32px_rgba(0,_0,_0,_0.5)]"
            ></iframe>
          </div>
        </div>
      ) : (
        <div>
          <Image
            src={videoData.desktop.thumbnail}
            alt="Video Thumbnail"
            width={960}
            height={540}
            className="rounded-2xl shadow-[2px_18px_32px_rgba(0,_0,_0,_0.5)] hidden sm:hidden md:block"
            onClick={handleDesktopClick}
          />
        </div>
      )}
    </div>
  );
}

export default Video;
