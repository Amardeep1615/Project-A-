// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className=" bg-gradient-to-r from-blue-900 to-blue-700 text-white py-5 shadow-lg  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shadow-md">
  <span className="text-blue-900 font-bold text-xl">A</span>
</div>

          <h1 className="text-3xl font-bold tracking-wide">
            Project <span className="text-yellow-400">A</span>
          </h1>
        </div>

        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:text-amber-500 transition-colors duration-300 font-medium relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="hover:text-amber-500 transition-colors duration-300 font-medium relative group">
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/services" className="hover:text-amber-500 transition-colors duration-300 font-medium relative group">
            Services
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="hover:text-amber-500 transition-colors duration-300 font-medium relative group">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/get-started" className="ml-4 bg-amber-500 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
            Get Started
          </Link>
        </nav>

        <button
          id="menu-toggle"
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu md:hidden bg-blue-800 px-6 py-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col space-y-4">
          <Link to="/" className="text-white hover:text-amber-500 transition" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="text-white hover:text-amber-500 transition" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <Link to="/services" className="text-white hover:text-amber-500 transition" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link to="/contact" className="text-white hover:text-amber-500 transition" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link to="/get-started" className="bg-amber-500 text-blue-900 px-4 py-2 rounded-full text-center font-semibold mt-2" onClick={() => setIsMobileMenuOpen(false)}>
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;