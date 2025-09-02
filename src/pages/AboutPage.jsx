// src/components/About.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faLightbulb,
  faUsers,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const AboutPage = () => {
  return (
    <section className="text-gray-800">
      {/* HERO */}
      <div className="py-16 bg-gradient-to-r from-sky-100 to-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ANA <span className="text-sky-600">Innovative Works</span>
            </h2>
            <p className="text-lg mb-6 text-gray-600">
              We deliver modern digital solutions to empower businesses —
              from software development to AI-driven automation.
            </p>
            <a
              href="/getintouch"
              className="inline-block bg-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-700 transition"
            >
              Get in Touch
            </a>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80"
              alt="Technology Team"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* MISSION / SERVICES */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <FontAwesomeIcon
              icon={faLaptopCode}
              className="text-sky-600 text-3xl mb-3"
            />
            <h4 className="font-semibold text-lg">Software Development</h4>
            <p className="text-gray-600 text-sm">
              Building scalable, secure, and custom applications.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faLightbulb}
              className="text-sky-600 text-3xl mb-3"
            />
            <h4 className="font-semibold text-lg">AI & Automation</h4>
            <p className="text-gray-600 text-sm">
              Leveraging AI to optimize workflows and insights.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faUsers}
              className="text-sky-600 text-3xl mb-3"
            />
            <h4 className="font-semibold text-lg">Client Collaboration</h4>
            <p className="text-gray-600 text-sm">
              Dedicated support with long-term partnerships.
            </p>
          </div>
        </div>
      </div>

      {/* STATISTICS */}
      <div className="py-12 bg-sky-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <FontAwesomeIcon
              icon={faChartLine}
              className="text-sky-600 text-2xl mb-2"
            />
            <h4 className="text-2xl font-bold">250+</h4>
            <p className="text-gray-600 text-sm">Projects</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faUsers}
              className="text-sky-600 text-2xl mb-2"
            />
            <h4 className="text-2xl font-bold">120+</h4>
            <p className="text-gray-600 text-sm">Clients</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faLaptopCode}
              className="text-sky-600 text-2xl mb-2"
            />
            <h4 className="text-2xl font-bold">50+</h4>
            <p className="text-gray-600 text-sm">Experts</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold">4.9/5</h4>
            <p className="text-gray-600 text-sm">Ratings</p>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="bg-sky-600 py-12 text-center text-white">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Transform Your Business?
        </h3>
        <p className="mb-6">
          Let’s collaborate and build solutions that make a difference.
        </p>
        <a
          href="/contact"
          className="bg-white text-sky-600 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default AboutPage;
