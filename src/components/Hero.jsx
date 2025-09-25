// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  // Store images in an array
  const images = ["/com.jpg", "/sci1.jpg", "/math1.jpg", "/math2.jpg", "/phy2.jpg","/chem2.jpg","/eng2.jpg"];
  const [currentImage, setCurrentImage] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden bg-black"> 
      {/* Background Images */}
      <img
        src="cod2.jpg"
        alt="Background Computer"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />

      {/* Floating Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-400 rounded-full opacity-20 blur-3xl animate-float"></div>
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full opacity-20 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center relative z-10">
        
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
            TMK Presents <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-purple-400">
              Innovative Solutions
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg mx-auto md:mx-0">
            Welcome to our official platform for creativity and innovation. We build digital experiences that matter.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Link
              to="FigmaPage"
              className="bg-amber-500 hover:bg-white text-black  hover:text-amber hover:font-bold px-6 py-3 rounded-full  font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Figma
            </Link>
            <Link
              to="ourstorypage"
              className="bg-amber-500 hover:bg-white text-black  hover:text-amber hover:font-bold px-6 py-4 rounded-full  font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Our Story
            </Link>
            <Link
              to="LearnMore"
              className=" bg-amber-500 hover:bg-white text-black  hover:text-amber hover:font-bold px-6 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Slideshow */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="relative bg-white p-1 rounded-2xl shadow-2xl overflow-hidden">
              {/* Window bar */}
              <div className="bg-gray-100 h-8 rounded-t-lg flex items-center px-3 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              {/* Slideshow Image */}
              <img
                src={images[currentImage]}
                alt="Innovation"
                className="w-full h-full md:h-96  object-cover rounded-b-lg transition-opacity duration-1000 ease-in-out"
                key={currentImage} // Force re-render for fade
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
