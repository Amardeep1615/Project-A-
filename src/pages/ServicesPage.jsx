// src/pages/ServicesPage.jsx
import React from 'react';

const ServicesPage = () => {
  return (
    <section className="py-20 text-center bg-gray-100 flex-grow">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary-800 mb-6">Our Services</h2>
        <p className="text-lg text-gray-700 mb-8">
          Discover the range of solutions we offer to help your business thrive. From web development to cloud solutions, we've got you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-primary-700 mb-3">Web Development</h3>
            <p className="text-gray-600">Building responsive, high-performance websites tailored to your needs.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-primary-700 mb-3">Mobile App Development</h3>
            <p className="text-gray-600">Creating intuitive and engaging mobile applications for iOS and Android.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-primary-700 mb-3">Cloud Solutions</h3>
            <p className="text-gray-600">Expertise in cloud infrastructure, migration, and optimization.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-primary-700 mb-3">UI/UX Design</h3>
            <p className="text-gray-600">Crafting beautiful and user-friendly interfaces that convert.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-primary-700 mb-3">Digital Marketing</h3>
            <p className="text-gray-600">Strategies to boost your online presence and reach your target audience.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-primary-700 mb-3">Data Analytics</h3>
            <p className="text-gray-600">Leveraging data to provide actionable insights and drive informed decisions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;