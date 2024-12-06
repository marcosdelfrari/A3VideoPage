"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  image: string;
  alt: string;
  price: string;
  purchaseLink: string;
}

function Card({ image, alt, price, purchaseLink }: CardProps) {
  return (
    <div className="card p-5 my-4 shadow-[10px_8px_40px_rgba(0,_0,_0,_0.5)] rounded-[30px]  flex flex-col items-center bg-white">
      <Image
        src={image}
        alt={alt}
        width={200}
        height={200}
        className="rounded-md mb-4"
      />
      <h1 className="text-[36px] font-bold text-black">{price}</h1>
      <Link className="w-full" href={purchaseLink}>
        <button className="bg-[#32794f] font-light text-[22px] w-full rounded-[16px] text-white px-4 py-2 hover:bg-[#04411d] transition duration-200">
          Buy Now
        </button>
      </Link>
    </div>
  );
}

export default Card;
