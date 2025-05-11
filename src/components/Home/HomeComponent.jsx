import React from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import AboutMe from '../About/About';
import Projects from '../Projects/Projects';
import Experience from '../Experince/Experincese';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { FaLinkedin, FaGitSquare } from 'react-icons/fa';

const HomeComponent = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-900 via-gray-900 to-black text-white min-h-screen">
      <HeaderComponent />

      {/* Hero Section with Improved Animations */}
      <motion.div
        className="flex flex-col items-center justify-center px-6 md:px-12 py-20 gap-12"
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <section className="max-w-5xl mx-auto text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
            <ReactTyped
              strings={["Hey, I'm Jagadeesh 👋"]}
              typeSpeed={50}
              showCursor={false}
            />
          </h1>

          <p className="text-xl md:text-2xl font-medium mb-8">
            <ReactTyped
              strings={['Full Stack Web3D Developer', 'MERN Stack', 'Three.js', 'React Three Fiber']}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </p>

          {/* Social Icons and Resume Button */}
          <motion.div
            className="icons mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <ul className="flex gap-8 justify-center md:justify-start items-center">
              <li>
                <a
                  href="https://www.linkedin.com/in/jagadeesh-meesala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all transform hover:scale-110 hover:text-blue-500 text-4xl"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jagadeeshmeesala11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all transform hover:scale-110 hover:text-green-500 text-4xl"
                >
                  <FaGitSquare />
                </a>
              </li>
              <li>
                <motion.a
                  href="/Myresume.pdf"
                  download
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition-all duration-300 mt-6"
                >
                  Download Resume
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </section>
      </motion.div>

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <AboutMe />
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <Projects />
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <Experience />
      </motion.div>
    </div>
  );
};

export default HomeComponent;
