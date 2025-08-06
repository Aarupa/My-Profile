import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left: Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-white">Dinesh Ghadge</h2>
          <p className="text-sm mt-1">Aspiring ML Engineer & Data Scientist</p>
        </div>

        {/* Center: Links */}
        <div className="space-x-6 text-sm">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/dineshghadge2002" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-white" />
          </a>
          <a href="https://linkedin.com/in/dinesh-ghadge-05may02/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-white" />
          </a>
          <a href="mailto:dghadge2002@gmail.com">
            <FaEnvelope className="text-xl hover:text-white" />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-6 border-t pt-4 border-gray-700">
        © {new Date().getFullYear()} Dinesh Ghadge. All rights reserved.
      </div>
    </footer>
  );
};
