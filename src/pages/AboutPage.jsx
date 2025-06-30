// src/components/About.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLaptopCode, faLightbulb, faUsers, faStar, faChartLine } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
  return (
    <section className="text-gray-800">
      {/* HERO SECTION */}
      <div className="py-20 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              ANA <span className="text-sky-600">Innovative Works</span>
            </h3>
            <p className="text-lg mb-6 max-w-xl">
              Transforming businesses with next-generation technology solutions. We combine creativity, expertise, and innovation to deliver impactful results.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faLaptopCode} className="text-sky-600 mt-1 mr-3 text-lg" />
                <span>Custom Software Development & Cloud Solutions</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faLightbulb} className="text-sky-600 mt-1 mr-3 text-lg" />
                <span>AI-Powered Automation & Data Analytics</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faUsers} className="text-sky-600 mt-1 mr-3 text-lg" />
                <span>Dedicated Expert Teams & Client Partnership</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-sky-600 mt-1 mr-3 text-lg" />
                <span>Proven Success Across Global Industries</span>
              </li>
            </ul>
            <a
              href="/"
              className="mt-8 inline-block bg-sky-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-700 shadow-md transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Image */}
          <div className="relative group">
            <div className="rounded-xl overflow-hidden shadow-xl transform group-hover:scale-105 transition duration-500 ease-in-out">
              <img
                src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
                alt="Modern Technology Team"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow text-sky-700 font-medium">
              Empowering Innovation
            </div>
          </div>
        </div>
      </div>

      {/* STATISTICS */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <FontAwesomeIcon icon={faChartLine} className="text-sky-600 text-3xl mb-2" />
            <h4 className="text-3xl font-bold">250+</h4>
            <p className="text-gray-600">Projects Delivered</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUsers} className="text-sky-600 text-3xl mb-2" />
            <h4 className="text-3xl font-bold">120+</h4>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faLaptopCode} className="text-sky-600 text-3xl mb-2" />
            <h4 className="text-3xl font-bold">50+</h4>
            <p className="text-gray-600">Expert Developers</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faStar} className="text-sky-600 text-3xl mb-2" />
            <h4 className="text-3xl font-bold">4.9/5</h4>
            <p className="text-gray-600">Client Rating</p>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="py-20 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-12">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 mb-4">
                "ANA Innovative Works helped us revolutionize our online services.
                Their AI solutions have significantly improved our efficiency."
              </p>
              <h5 className="font-semibold text-sky-600">— Sarah L., CEO at TechCorp</h5>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 mb-4">
                "Professional, dedicated, and creative. Their team delivered beyond
                our expectations."
              </p>
              <h5 className="font-semibold text-sky-600">— John D., Founder of CloudEdge</h5>
            </div>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="bg-sky-600 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Start Your Digital Transformation?
          </h3>
          <p className="text-lg mb-6">
            Contact our team to discuss your project and discover how we can
            bring your ideas to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-sky-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
