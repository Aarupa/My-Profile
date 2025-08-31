
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full py-12 sm:py-20 bg-blue-100 px-4 sm:px-6">
      <div className="max-w-screen-2xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center">
          {/* Left: Contact Links */}
          <motion.div
            className="w-full md:w-1/2 bg-white rounded-xl shadow-md p-6 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-6 text-center">Get in Touch</h3>
            <ul className="space-y-6 text-base sm:text-lg text-gray-700">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 hover:bg-blue-50 px-3 py-2 rounded-lg cursor-pointer transition"
                whileHover={{ scale: 1.05, backgroundColor: "#e0e7ff" }}
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
                className="flex items-center gap-3 hover:bg-blue-50 px-3 py-2 rounded-lg cursor-pointer transition"
                whileHover={{ scale: 1.05, backgroundColor: "#e0e7ff" }}
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
                className="flex items-center gap-3 hover:bg-blue-50 px-3 py-2 rounded-lg cursor-pointer transition"
                whileHover={{ scale: 1.05, backgroundColor: "#e0e7ff" }}
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
          </motion.div>
          {/* Right: Contact Form */}
          <motion.div
            className="w-full md:w-1/2 bg-white rounded-xl shadow-md p-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-6 text-center">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-blue-700 text-white font-medium py-2 rounded-lg hover:bg-blue-800 transition shadow-lg hover:scale-105 active:scale-95 duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
