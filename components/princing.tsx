"use client";
import React from "react";
import Card from "./card";
import { cardData } from "../lib/data";
import { IoIosArrowRoundDown } from "react-icons/io";
import { motion } from "framer-motion";
function princing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="m-auto max-w-[900px]"
    >
      <div className="flex justify-center text-[34px] p-5">
        <svg
          width="16"
          height="36"
          viewBox="0 0 16 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.29289 35.7071C7.68342 36.0976 8.31658 36.0976 8.70711 35.7071L15.0711 29.3431C15.4616 28.9526 15.4616 28.3195 15.0711 27.9289C14.6805 27.5384 14.0474 27.5384 13.6569 27.9289L8 33.5858L2.34314 27.9289C1.95262 27.5384 1.31946 27.5384 0.928931 27.9289C0.538407 28.3195 0.538407 28.9526 0.928931 29.3431L7.29289 35.7071ZM7 -4.37114e-08L7 35L9 35L9 4.37114e-08L7 -4.37114e-08Z"
            fill="#DDF7E3"
          />
        </svg>
      </div>
      <div className="grid m-auto py-10 grid-cols-1 justify-items-center lg:grid-cols-3 gap-4">
        {" "}
        {cardData.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            alt={card.alt}
            price={card.price}
            purchaseLink={card.purchaseLink}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default princing;
