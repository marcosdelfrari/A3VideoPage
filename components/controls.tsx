"use client";
import React, { useState } from "react";
import Video from "./video";
import Card from "./card";
import Footer from "./footer";
import Princing from "./princing";
import { motion } from "framer-motion";
function Controls() {
  const [showCard, setShowCard] = useState(false);

  const handleVideoClick = () => {
    setShowCard(true); // Exibe o Card imediatamente ao clicar no contêiner
  };

  return (
    <motion.div
      className="p-5"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
    >
      <Video onClick={handleVideoClick} />
      {showCard && (
        <div>
          <Princing /> <Footer />
        </div>
      )}{" "}
      {/* Renderiza o Card se showCard for true */}
    </motion.div>
  );
}

export default Controls;
