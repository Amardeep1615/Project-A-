// src/components/Testimonials.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="text-accent">Clients Say</span></h3>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it - hear from our satisfied customers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img src="https://randomuser.me/api/portraits/women/43.jpg" alt="Sarah J." className="w-full h-full object-cover" />
              </div>
              <div>
                <h5 className="font-bold">Hareesh Madineedi.</h5>
                <p className="text-gray-600 text-sm">Python and Ds Developer</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"Project A transformed our digital presence. Their innovative approach delivered results beyond our expectations."</p>
            <div className="mt-4 text-yellow-400">
              <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael T." className="w-full h-full object-cover" />
              </div>
              <div>
                <h5 className="font-bold">Dinesh kuna.</h5>
                <p className="text-gray-600 text-sm">High TechSolutions, React Developer</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"The team at Project A understands our vision and delivers solutions that drive real business growth."</p>
            <div className="mt-4 text-yellow-400">
              <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Lisa M." className="w-full h-full object-cover" />
              </div>
              <div>
                <h5 className="font-bold">Vamsee Krishna Galeti.</h5>
                <p className="text-gray-600 text-sm">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"Exceptional service and support. They've become an invaluable partner for our digital transformation."</p>
            <div className="mt-4 text-yellow-400">
              <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;