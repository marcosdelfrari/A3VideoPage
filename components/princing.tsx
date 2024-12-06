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
        <IoIosArrowRoundDown />
      </div>
      <div className="grid py-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
