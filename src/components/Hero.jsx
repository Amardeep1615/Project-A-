// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-10 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center relative z-10">
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            TMK Presents <br />
            <span className="gradient-text">Innovative Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Welcome to our official platform for creativity and innovation. We build digital experiences that matter.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Link
              to="FigmaPage"
              className="bg-blue-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl"
            >
              Figma
            </Link>
            <Link
              to="LearnMore"
              className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-all"
            >
              Learn More
            </Link>
            <Link
              to="ourstorypage"
              className="bg-amber-500 hover:bg-blue-700 text-blue-900 hover:text-black px-6 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
            >
              Our Story
            </Link>
          </div>


        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-500 rounded-full opacity-20 animate-float"></div>
            <div
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-400 rounded-full opacity-20 animate-float"
              style={{ animationDelay: '2s' }}
            ></div>
            <div className="relative bg-white p-1 rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gray-100 h-8 rounded-t-lg flex items-center px-3 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Innovation"
                className="w-full h-auto rounded-b-lg"
              />
            </div>
          </div>
        </div>
      </div>

    

    </section>
  );
};

export default Hero;
