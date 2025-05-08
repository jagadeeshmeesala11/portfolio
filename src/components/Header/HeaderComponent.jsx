import React, { useState } from 'react';

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-[#121212] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header content */}
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-2xl font-bold text-[#00bcd4]">
           
          </div>

          {/* Navigation Links for Desktop */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-[#ff4081] transition duration-300">
              Home
            </a>
            <a href="#about" className="hover:text-[#ff4081] transition duration-300">
              About
            </a>
            <a href="#projects" className="hover:text-[#ff4081] transition duration-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#ff4081] transition duration-300">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 space-y-4 text-center`}
        >
          <a href="#home" className="block hover:text-[#ff4081] transition duration-300">
            Home
          </a>
          <a href="#about" className="block hover:text-[#ff4081] transition duration-300">
            About
          </a>
          <a href="#projects" className="block hover:text-[#ff4081] transition duration-300">
            Projects
          </a>
          <a href="#contact" className="block hover:text-[#ff4081] transition duration-300">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
