// src/components/CTA.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScheduleDemo from '../pages/ScheduleDemo';

const CallFun = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="p-6 bg-white rounded-lg shadow-md">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Learning Experience?
        </h3>
        <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
          Join hundreds of students who trust Project A for interactive and engaging education.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Get Started Button */}
          <Link
            to="/GetStarted"
            className="bg-amber-500 hover:bg-opacity-90 text-blue-900 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
          >
            Get Started Now
          </Link>

          {/* Schedule Demo Button */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-800 hover:bg-amber-400 px-5 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
          >
            Schedule a Demo
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 relative w-full max-w-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 bg-blue-700 hover:bg-amber-600 font-bold text-xl text-white px-2 rounded"
            >
              &times;
            </button>
            <ScheduleDemo />
          </div>
        </div>
      )}
    </section>
  );
};

export default CallFun;
