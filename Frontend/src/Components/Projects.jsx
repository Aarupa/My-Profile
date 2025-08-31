import React, { useState } from "react";
import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    {
      title: "Auto Preprocessing and Modeling",
      description:
        "Handles preprocessing like missing values and categorical variables, then builds classification/regression models."
    },
    {
      title: "Job Placement Prediction Using KNN",
      description:
        "Predicts job placement outcomes based on various factors using the K-Nearest Neighbors algorithm."
    },
    {
      title: "MNIST Digit Classification",
      description:
        "Trains a neural network to classify handwritten digits using Keras on the MNIST dataset."
    },
    {
      title: "Social Media Through HandGesture",
      description:
        "Uses OpenCV and cvzone HandTrackingModule to control social media access via hand gestures."
    }
  ];

  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <section id="projects" className="w-full py-12 sm:py-16 bg-blue-50 px-4 sm:px-6">
      <div className="max-w-screen-2xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-xl">
            <motion.div
              key={current}
              className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center min-h-[220px] border-2 border-blue-200"
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-3 text-center drop-shadow-lg">
                {projects[current].title}
              </h3>
              <p className="text-gray-700 text-lg text-center mb-2">
                {projects[current].description}
              </p>
              <div className="flex justify-center gap-2 mt-4">
                {projects.map((_, idx) => (
                  <span
                    key={idx}
                    className={`inline-block w-3 h-3 rounded-full transition-all duration-200 ${idx === current ? 'bg-blue-700 scale-125' : 'bg-blue-200'}`}
                  />
                ))}
              </div>
            </motion.div>
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-700 text-white rounded-full p-2 shadow hover:bg-blue-800 transition"
              aria-label="Previous Project"
              style={{ zIndex: 2 }}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-700 text-white rounded-full p-2 shadow hover:bg-blue-800 transition"
              aria-label="Next Project"
              style={{ zIndex: 2 }}
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

