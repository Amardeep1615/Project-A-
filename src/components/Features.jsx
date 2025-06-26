// src/components/Features.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faShieldAlt, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-amber-500">Project A</span></h3>
          <p className="text-gray-600 max-w-2xl mx-auto">We combine innovative technology with creative solutions to deliver exceptional results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md card-hover">
            <div className="w-16 h-16 bg-primary-100 rounded-full items- center justify-center mb-6">
              <FontAwesomeIcon icon={faBolt} className="text-2xl text-amber-500" />
            </div>
            <h4 className="text-xl font-bold mb-3">Fast Performance</h4>
            <p className="text-gray-600">Optimized solutions that deliver lightning-fast performance for your business needs.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md card-hover">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faShieldAlt} className="text-2xl text-amber-500" />
            </div>
            <h4 className="text-xl font-bold mb-3">Secure Solutions</h4>
            <p className="text-gray-600">Enterprise-grade security to protect your data and ensure privacy compliance.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md card-hover">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={faChartLine} className="text-2xl text-amber-500" />
            </div>
            <h4 className="text-xl font-bold mb-3">Growth Focused</h4>
            <p className="text-gray-600">Scalable solutions designed to grow with your business and adapt to changing needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;