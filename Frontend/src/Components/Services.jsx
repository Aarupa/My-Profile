import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaRobot, FaBrain } from "react-icons/fa";

const services = [
  {
    title: "Simple Platform",
    description:
      "A basic platform providing computing and storage services — ideal for personal and small-scale projects.",
    icon: <FaServer size={32} className="text-blue-600" />,
  },
  {
    title: "ML Model Trainer",
    description:
      "Train and save machine learning models automatically by uploading datasets. Perfect for non-coders and rapid prototyping.",
    icon: <FaBrain size={32} className="text-purple-600" />,
  },
  {
    title: "Chatbot Service",
    description:
      "Upload documents and get a chatbot that answers based on your content. Includes API access for integration.",
    icon: <FaRobot size={32} className="text-green-600" />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="w-full py-12 sm:py-16 bg-blue-50 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Upcoming Services
        </motion.h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition relative hover:scale-[1.03] duration-200"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Badge */}
              <span className="absolute top-4 right-4 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Coming Soon
              </span>

              {/* Icon */}
              <div className="mb-4 flex justify-center">{service.icon}</div>

              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
