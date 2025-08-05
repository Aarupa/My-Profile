import React from "react";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <section
      id="home"
      className="h-screen w-full flex items-center justify-center bg-blue-100"
    >
      <motion.h1
        className="text-5xl font-bold text-blue-700"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Welcome to My Portfolio
      </motion.h1>
    </section>
  );
};
