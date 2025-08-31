
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import profilePic from "../assets/picdg1.jpg";

const subtitleText = "ML Engineer | Data Scientist | Cloud & MLOps Enthusiast";

export const Home = () => {
  // Typing animation state
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedSubtitle(subtitleText.slice(0, i + 1));
      i++;
      if (i === subtitleText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Click to unlock
  const handleUnlock = () => setUnlocked(true);

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-80"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-2xl mx-auto gap-10 md:gap-20">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-800 mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Hi, I'm Dinesh Ghadge
          </motion.h1>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl text-blue-700 mb-6 font-semibold min-h-[2.5rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {typedSubtitle}
            <span className="animate-pulse">{typedSubtitle.length < subtitleText.length ? "|" : ""}</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-700 max-w-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I build intelligent systems using AI/ML to solve real-world problems. Explore my portfolio to see what I’ve been working on.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#projects"
              className="inline-block bg-blue-700 text-white text-lg font-medium px-8 py-3 rounded-xl hover:bg-blue-800 transition shadow-lg hover:scale-105 active:scale-95 duration-200"
            >
              Explore Projects
            </a>
          </motion.div>
        </div>
        {/* Right: Self Picture */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative group w-64 h-64">
            <img
              src={profilePic}
              alt="Dinesh Ghadge"
              className={`w-64 h-64 object-cover rounded-full border-4 border-blue-400 shadow-xl transition duration-300 ${unlocked ? '' : 'blur-sm'}`}
              style={{ filter: unlocked ? 'none' : 'blur(8px)' }}
            />
            {/* Overlay with lock and key if not unlocked */}
            {!unlocked && (
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-700 bg-opacity-80 flex flex-col items-center justify-center cursor-pointer"
                initial={{ opacity: 1 }}
                animate={{ opacity: unlocked ? 0 : 1 }}
                transition={{ duration: 0.6 }}
                onClick={handleUnlock}
                title="Click to unlock"
              >
                {/* Lock icon */}
                <div className="mb-4">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                    <rect x="7" y="11" width="10" height="8" rx="2" fill="#fff" />
                    <rect x="9" y="7" width="6" height="6" rx="3" fill="#1976d2" />
                    <rect x="11" y="15" width="2" height="2" rx="1" fill="#1976d2" />
                  </svg>
                </div>
                {/* Key icon */}
                <div className="mb-2">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <circle cx="10" cy="12" r="4" fill="#fff" />
                    <rect x="14" y="11" width="6" height="2" rx="1" fill="#1976d2" />
                    <rect x="18" y="13" width="2" height="2" rx="1" fill="#1976d2" />
                  </svg>
                </div>
                <span className="text-white text-base">Click to unlock and reveal</span>
              </motion.div>
            )}
            {/* Welcome text after unlock */}
            {unlocked && (
              <motion.div
                className="absolute inset-0 rounded-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {/* <motion.span
                  className="text-blue-700 text-2xl font-bold bg-white bg-opacity-70 px-6 py-2 rounded-full shadow cursor-move"
                  drag
                  dragConstraints={{ left: 0, right: 256, top: 0, bottom: 256 }}
                  dragElastic={0.7}
                >
                  Welcome!
                </motion.span> */}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
