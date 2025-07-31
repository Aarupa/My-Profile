import React from 'react';
import { Home } from './Home';
export const Navbar = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 scroll-smooth">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md px-8 py-4 flex justify-between items-center w-full">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-blue-700 tracking-tight hover:scale-105 transition-transform duration-300 cursor-pointer">
          DG
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-lg text-gray-700 font-medium">
          {['Home', 'About', 'Experience', 'Projects', 'Contact', 'Services'].map((item, index) => (
            <li key={index} className="relative group cursor-pointer hover:text-blue-600 transition-colors duration-300">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      <section id="home" className="h-screen w-full flex items-center justify-center bg-blue-50">
        <h1 className="text-5xl font-bold text-blue-700">
            <Home />
        </h1>
      </section>

      <section id="about" className="h-screen w-full flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl font-semibold text-gray-800">About Me</h2>
      </section>

      <section id="experience" className="h-screen w-full flex items-center justify-center bg-blue-100">
        <h2 className="text-4xl font-semibold text-gray-800">Experience</h2>
      </section>

      <section id="projects" className="h-screen w-full flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl font-semibold text-gray-800">Projects</h2>
      </section>

      <section id="contact" className="h-screen w-full flex items-center justify-center bg-blue-100">
        <h2 className="text-4xl font-semibold text-gray-800">Contact</h2>
      </section>

      <section id="services" className="h-screen w-full flex items-center justify-center bg-gray-100">
        <h2 className="text-4xl font-semibold text-gray-800">Services</h2>
      </section>
    </div>
  );
};
