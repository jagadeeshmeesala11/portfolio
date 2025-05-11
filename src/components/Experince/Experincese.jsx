import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => (
  <section className="px-6 py-16 bg-gradient-to-b from-gray-900 to-black text-white">
    <motion.h1
      className="text-4xl font-extrabold text-center mb-16"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      Experience
    </motion.h1>

    <div className="relative border-l-2 border-gray-700 ml-6 max-w-4xl mx-auto">
      <motion.div
        className="mb-14 ml-8 relative bg-gray-800 p-6 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-500 transform"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span className="absolute w-4 h-4 bg-blue-500 rounded-full -left-6 top-1 shadow-md" />
        <h3 className="text-2xl font-semibold text-white mb-2">PlugXR – Web3D & AR Intern</h3>
        <p className="text-sm italic text-gray-400 mb-3">Jan 2025 – Apr 2025 | Hyderabad, Telangana</p>
        <p className="text-gray-300">
          Built immersive 3D experiences with Three.js and integrated AR using PlugXR. Learned WebXR fundamentals, optimized 3D assets, and published interactive AR/VR web apps.
        </p>
      </motion.div>

  
    </div>
  </section>
);

export default Experience;
