import React from "react";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-gray-100 px-4">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-800 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I’m a <strong>Motivated ML Engineer and Data Scientist</strong> with hands-on experience in cloud data engineering, machine learning, deep learning, and MLOps. Currently working at <strong>Tata Consultancy Services (TCS)</strong>, I’m passionate about turning data into actionable insights and building AI-powered solutions that solve real-world challenges.
        </motion.p>

        <motion.p
          className="text-gray-800 text-lg leading-relaxed mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          My expertise spans the entire data pipeline — from data ingestion and processing in the cloud, to training and deploying scalable ML/DL models using modern MLOps practices. I thrive in collaborative environments and am always eager to learn, innovate, and drive impact through technology.
        </motion.p>
      </motion.div>
    </section>
  );
};
