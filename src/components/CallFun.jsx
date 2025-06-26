// src/components/CTA.jsx
import React from 'react';

const CallFun = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h3>
        <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">Join hundreds of satisfied clients who trust Project A for innovative solutions.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a href="/" className="bg-amber-500 hover:bg-opacity-90 text-blue-900 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl">
            Get Started Now
          </a>
          <a href="/" className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-full font-bold transition-all">
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallFun;