"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { themeColors } from "@/lib/data"; // Importando as cores

interface CardProps {
  image: string;
  alt: string;
  price: string;
  purchaseLink: string;
}

function Card({ image, alt, price, purchaseLink }: CardProps) {
  return (
    <div
      className={`card max-w-[302px] p-5 my-4 shadow-[10px_8px_40px_rgba(0,_0,_0,_0.5)] rounded-[30px] flex flex-col items-center`}
      style={{ backgroundColor: themeColors.cardBackground }}
    >
      <Image
        src={image}
        alt={alt}
        width={200}
        height={200}
        className="rounded-md mb-4"
      />
      <h1
        className="text-[36px] font-bold"
        style={{ color: themeColors.textColor }}
      >
        {price}
      </h1>
      <Link className="w-full" href={purchaseLink}>
        <button
          className={`font-light text-[22px] w-full rounded-[16px] text-black px-4 py-2 transition duration-200`}
          style={{
            backgroundColor: themeColors.buttonColor,
            color: themeColors.textPrice,
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor =
              themeColors.buttonHoverColor;
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.backgroundColor =
              themeColors.buttonColor;
          }}
        >
          Buy Now
        </button>
      </Link>
    </div>
  );
}

export default Card;
