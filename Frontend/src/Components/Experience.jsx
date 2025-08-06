import React from "react";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <section className="w-full py-16 bg-blue-100 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-10">
          {/* TCS */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-blue-800">
              AWS Data Engineer – TCS
            </h3>
            <p className="text-sm text-gray-500 mb-2">Pune, IN | Mar 2024 – Present</p>
            <ul className="list-disc ml-5 text-gray-700 leading-relaxed">
              <li>Experience in SQL, Redshift, and Python</li>
              <li>Performed data validation, data loading, and schema analysis</li>
            </ul>
          </motion.div>

          {/* Linux World */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-blue-800">
              MLOps Intern – Linux World Informatics
            </h3>
            <p className="text-sm text-gray-500 mb-2">Jaipur, IN | Jun 2023 – Aug 2023</p>
            <ul className="list-disc ml-5 text-gray-700 leading-relaxed">
              <li>Built AI/ML models for cloud computing</li>
              <li>Deployed with DevOps pipelines powered by ChatGPT API</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
