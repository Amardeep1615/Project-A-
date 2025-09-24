// src/components/CTA.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ScheduleDemo from "../pages/ScheduleDemo";
import FadeInSection from "./FadeInSection";

const CallFun = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-16 ">
      <FadeInSection>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
          Ready to <span className="text-amber-500">Transform Your Learning</span> Experience?
        </h3>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Join hundreds of students who trust Project A for interactive, engaging, and innovative education.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Get Started Button */}
          <Link
            to="/GetStarted"
            className="bg-amber-500 hover:bg-black text-black  hover:text-white font-medium hover:font-bold px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get Started Now
          </Link>

          {/* Schedule Demo Button */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-amber-500 hover:bg-black text-black  hover:text-white font-medium hover:font-bold px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Schedule a Demo
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-6 relative w-full max-w-lg shadow-2xl animate-fadeIn">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 bg-red-500 hover:bg-red-400 font-bold text-xl text-white px-3 py-1 rounded-full transition-all duration-300"
            >
              &times;
            </button>
            <ScheduleDemo />
          </div>
        </div>
      )}
      </FadeInSection>
    </section>
  );
};

export default CallFun;
