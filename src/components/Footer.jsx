// src/components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link for internal navigation

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <span className="text-primary-900 font-bold text-xl">A</span>
              </div>
              <h4 className="text-xl font-bold">Project A</h4>
            </div>
            <p className="text-gray-400 mb-4">Innovative solutions for the digital age.</p>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-400 hover:text-white transition">
                <FontAwesomeIcon icon={faTwitter} className="text-xl" />
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition">
                <FontAwesomeIcon icon={faFacebook} className="text-xl" />
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition">
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition">
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Company</h5>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><a href="/" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white transition">Press</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Resources</h5>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Documentation</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white transition">Guides</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white transition">API Status</a></li>
              <li><a href="/" className="text-gray-400 hover:text-white transition">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Contact</h5>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 mr-3 text-accent" />
                <span>123 Innovation Drive, Tech City, TC 12345</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faPhoneAlt} className="mt-1 mr-3 text-accent" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon icon={faEnvelope} className="mt-1 mr-3 text-accent" />
                <span>info@projecta.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0 text-gray-500">© 2025 Project A. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="/" className="text-gray-500 hover:text-white transition">Privacy Policy</a>
            <a href="/" className="text-gray-500 hover:text-white transition">Terms of Service</a>
            <a href="/" className="text-gray-500 hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;