import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { title: 'Frontend', color: 'bg-blue-500', level: 95, items: 'HTML, CSS, JavaScript, React, Tailwind' },
  { title: 'Backend', color: 'bg-green-500', level: 80, items: 'Node.js, Express, Python' },
  { title: 'Database', color: 'bg-purple-500', level: 90, items: 'MongoDB, SQLite' },
  { title: 'Tools & Concepts', color: 'bg-yellow-400', level: 85, items: 'Git, Redux, JWT, REST APIs' },
  { title: '3D & XR', color: 'bg-pink-500', level: 70, items: 'Three.js, R3F, WebXR, PlugXR' },
];

const AboutMe = () => {
  return (
    <section className="relative px-6 py-24 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden perspective-1000">
      {/* Decorative Blobs with more animation */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-800 rounded-full opacity-10 blur-3xl -z-10"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 360, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full opacity-10 blur-3xl -z-10"
        animate={{ scale: [1, 1.05, 1], rotate: [0, -360, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />

      <motion.h1
        className="text-5xl font-extrabold text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        About Me
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center gap-14 max-w-6xl mx-auto">
        <motion.img
          src="/me 1.jpg"
          alt="Jagadeesh"
          className="rounded-full w-44 h-44 object-cover border-4 border-gray-700 shadow-2xl hover:scale-105 transition-transform duration-300 hover:rotate-[15deg] transform-gpu"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          className="md:text-left text-center max-w-xl"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            I'm <span className="font-semibold text-blue-400">Jagadeesh Meesala</span>, a full-stack developer passionate about building web and 3D applications using React, Node.js, and immersive technologies.
          </p>

          {/* Skills */}
          <h2 className="text-2xl font-semibold mb-6">Skills & Technologies</h2>
          <div className="space-y-6">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform-gpu"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold text-lg">{skill.title}</h3>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-3 ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                  />
                </div>
                <p className="text-sm text-gray-400 mt-2">{skill.items}</p>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <ul className="text-gray-300 list-disc ml-6 space-y-2">
              <li><strong>Nxtwave</strong> – Full-stack Certification (2022–Now)</li>
              <li><strong>B.Tech (CSE)</strong> – Satya Institute (2021–2025)</li>
              <li><strong>Intermediate</strong> – Sri Chaitanya (2019–2021)</li>
              <li><strong>SSC</strong> – Saraf High School (2018–2019)</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-2">Let's Connect!</h2>
            <p className="text-gray-300 flex flex-col gap-2">
              📧 <a href="mailto:Jagadeeshmeesala00@gmail.com" className="text-blue-400 underline hover:text-blue-300 transition-all duration-300">Email</a>
              💼 <a href="https://www.linkedin.com/in/jagadeesh-meesala" className="text-blue-400 underline hover:text-blue-300 transition-all duration-300">LinkedIn</a>
              🖥️ <a href="https://github.com/jagadeeshmeesala11" className="text-blue-400 underline hover:text-blue-300 transition-all duration-300">GitHub</a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
