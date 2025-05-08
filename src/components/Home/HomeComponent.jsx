import React from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import AvatarComponent from '../Avatar/AvatarComponent';



const HomeComponent = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-black text-white">
      <HeaderComponent />
      <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-10 gap-10">
       
        <section className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hey, I'm Jagadeesh 👋
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-6">
            Full Stack Web3D Developer | MERN Stack | Three.js | React Three Fiber
          </p>
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:scale-105 transition">
            View My Work
          </button>
        </section>

        
        <div className="flex-1 w-full h-[500px]">
          <AvatarComponent />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
