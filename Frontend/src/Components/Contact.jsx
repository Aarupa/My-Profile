import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <section className="w-full py-20 bg-blue-100 px-6">
      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        <ul className="space-y-4 text-lg text-gray-700">
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2"
          >
            <FaPhoneAlt className="text-blue-600" />
            <a href="tel:+919370570053" className="hover:underline">
              +91 9370570053
            </a>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-2"
          >
            <FaEnvelope className="text-blue-600" />
            <a href="mailto:dghadge2002@gmail.com" className="hover:underline">
              dghadge2002@gmail.com
            </a>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            <FaLinkedin className="text-blue-600" />
            <a
              href="https://www.linkedin.com/in/dinesh-ghadge-05may02/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn Profile
            </a>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};
