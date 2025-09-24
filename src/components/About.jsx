// src/components/About.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-accent to-yellow-300 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">ANA <span className="text-amber-500">Innovative Works</span></h3>
            <p className="text-lg mb-6">Leading Tech Pathway Solutions by TMK. We're redefining what's possible through technology and creativity.</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mt-1 mr-3" />
                <span>Cutting-edge technology solutions</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mt-1 mr-3" />
                <span>Experienced team of innovators</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-primary-900 mt-1 mr-3" />
                <span>Proven track record of success</span>
              </li>
            </ul>
            <a href="/" className="mt-8 inline-block bg-primary-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
              Our Story
            </a>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-2 rounded-xl shadow-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Team" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;