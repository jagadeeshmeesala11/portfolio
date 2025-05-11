import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projectData = [
  {
    title: 'Jobby App',
    tech: 'React JS, JWT, REST API, Routing',
    desc: 'Job search platform with secure authentication and protected routes.',
    link: 'http://mjjobbyapp.ccbp.tech',
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: 'Nxt Trendz',
    tech: 'React JS, API, Routing, Bootstrap',
    desc: 'E-commerce clone of Amazon/Flipkart with product filters and auth.',
    link: 'http://jagadeeshmart.ccbp.tech',
    color: 'from-green-400 to-green-600',
  },
  {
    title: 'Food Munch',
    tech: 'HTML, CSS, Bootstrap',
    desc: 'Responsive food website with product showcase and video content.',
    link: 'http://mjagadeeshfood.ccbp.tech',
    color: 'from-yellow-300 to-yellow-500',
  },
  {
    title: 'Porsche 3D',
    tech: 'React, Three.js, R3F',
    desc: 'Immersive Porsche car viewer with 3D model interaction.',
    link: 'https://quiet-brigadeiros-ebfed4.netlify.app',
    color: 'from-pink-400 to-pink-600',
  },
];

const Projects = () => {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.h2
        className="text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="relative group p-[2px] rounded-2xl bg-gradient-to-br from-gray-700 via-gray-900 to-black shadow-lg transform transition-transform hover:-translate-y-1 hover:scale-[1.02]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 3 }}
          >
            {/* Glass inner card */}
            <div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl h-full transition-all duration-500 group-hover:shadow-2xl">
              <div
                className={`text-xs font-medium tracking-wide bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full inline-block mb-4 animate-pulse`}
              >
                {project.tech}
              </div>

              <motion.h3
                className="text-2xl font-bold mb-2 text-white group-hover:text-yellow-300 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {project.title}
              </motion.h3>

              <motion.p
                className="text-gray-300 text-sm mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {project.desc}
              </motion.p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                >
                  Visit Project <ExternalLink size={16} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
