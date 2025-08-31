import React from "react";
import { motion } from "framer-motion";

export const Projects = () => {
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

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition duration-200 hover:scale-[1.03]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
