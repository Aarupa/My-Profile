import React from 'react';
import { Home } from './Home';
import { AboutMe } from './AboutMe';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Services } from './Services';
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
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <div id="services">
          <Services />
        </div>
    </div>
  );
};
