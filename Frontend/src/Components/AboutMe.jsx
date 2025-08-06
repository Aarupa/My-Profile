import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.3 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="h-screen w-full flex items-center justify-center bg-gray-100 px-4"
    >
      <motion.div
        className="max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-4xl font-semibold text-gray-800 mb-4"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-800 text-lg leading-relaxed"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          I’m a <strong>Motivated ML Engineer and Data Scientist</strong> with hands-on experience in cloud data engineering, machine learning, deep learning, and MLOps. Currently working at <strong>Tata Consultancy Services (TCS)</strong>, I’m passionate about turning data into actionable insights and building AI-powered solutions that solve real-world challenges.
        </motion.p>

        <motion.p
          className="text-gray-800 text-lg leading-relaxed mt-4"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          My expertise spans the entire data pipeline — from data ingestion and processing in the cloud, to training and deploying scalable ML/DL models using modern MLOps practices. I thrive in collaborative environments and am always eager to learn, innovate, and drive impact through technology.
        </motion.p>
      </motion.div>
    </section>
  );
};
