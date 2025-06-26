// src/pages/ContactPage.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  return (
    <section className="py-20 bg-white flex-grow">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary-800 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-12">
          We'd love to hear from you! Reach out to us through any of the following methods, or fill out the form below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-primary-700 mb-2">Our Office</h3>
            <p className="text-gray-600">123 Innovation Drive, Tech City, TC 12345</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-3xl text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-primary-700 mb-2">Phone</h3>
            <p className="text-gray-600">(123) 456-7890</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-3xl text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-primary-700 mb-2">Email</h3>
            <p className="text-gray-600">info@projecta.com</p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-left">
          <h3 className="text-2xl font-bold text-primary-800 mb-6 text-center">Send us a message</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary-700"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary-700"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                rows="6"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary-700"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary-700 hover:bg-primary-800 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;