// src/pages/AboutPage.jsx
import React from 'react';
import { FaUsers, FaLightbulb, FaLaptopCode, FaHeadset } from 'react-icons/fa';


const AboutPage = () => {
  return (
    
    <div className="py-16 px-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-lg text-gray-600 mb-12">
          We are committed to delivering top-notch solutions with passion, innovation, and integrity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Section */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaUsers className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Our Team</h3>
            <p className="text-gray-600 text-sm">
              A dedicated team of professionals with expertise in development, design, and support.
            </p>
          </div>

          {/* Innovation */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaLightbulb className="text-yellow-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Innovation</h3>
            <p className="text-gray-600 text-sm">
              We believe in continuous improvement and bring creative ideas to life.
            </p>
          </div>

          {/* Technology */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaLaptopCode className="text-green-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Technology</h3>
            <p className="text-gray-600 text-sm">
              Utilizing the latest technologies to create scalable and efficient solutions.
            </p>
          </div>

          {/* Support */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <FaHeadset className="text-purple-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Support</h3>
            <p className="text-gray-600 text-sm">
              Our team is available 24/7 to assist you with anything you need.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    );
};

export default AboutPage;
