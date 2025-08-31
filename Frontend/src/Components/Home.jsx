import React from "react";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center bg-blue-100 px-4 sm:px-8 md:px-16 lg:px-32"
    >
      <div className="text-center w-full max-w-2xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-800 mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Hi, I'm Dinesh Ghadge
        </motion.h1>

        <motion.h2
          className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          ML Engineer | Data Scientist | Cloud & MLOps Enthusiast
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I build intelligent systems using AI/ML to solve real-world problems. Explore my portfolio to see what I’ve been working on.
        </motion.p>

        <motion.a
          href="#projects"
          className="inline-block bg-blue-700 text-white text-base sm:text-lg font-medium px-6 py-3 rounded-xl hover:bg-blue-800 transition shadow-lg hover:scale-105 active:scale-95 duration-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Explore Projects
        </motion.a>
      </div>
    </section>
  );
};
