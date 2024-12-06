"use client";
import React from "react";
import { motion } from "framer-motion";
function Header() {
  return (
    <header className="">
      <motion.div
        id="top"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="w-2/3 sm:w-full text-left sm:text-center p-5"
      >
        <p className="text-[12px] font-normal m-0 p-0">Simple</p>
        <h1 className="text-[48px] font-bold leading-[45px]">Landing Page</h1>
      </motion.div>
    </header>
  );
}

export default Header;
