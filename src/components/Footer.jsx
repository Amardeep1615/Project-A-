// src/components/Footer.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center shadow-lg">
                <span className="text-blue-900 font-bold text-xl">A</span>
              </div>
              <h4 className="text-xl font-bold">Project A Solutions</h4>
            </div>
            <p className="text-gray-300 mb-4">
              Delivering innovative digital solutions for learners and businesses worldwide.
            </p>
            <div className="flex space-x-4 mt-2">
              {[faTwitter, faFacebook, faLinkedin, faInstagram].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-300 hover:text-amber-400 transition-all duration-300 text-xl"
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Company</h5>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/about" className="hover:text-amber-400 transition">About Us</Link></li>
              <li><Link to="/career" className="hover:text-amber-400 transition">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-amber-400 transition">Blog</Link></li>
              <li><Link to="/press" className="hover:text-amber-400 transition">Press</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Resources</h5>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/docs" className="hover:text-amber-400 transition">Documentation</Link></li>
              <li><Link to="/guides" className="hover:text-amber-400 transition">Guides</Link></li>
              <li><Link to="/status" className="hover:text-amber-400 transition">API Status</Link></li>
              <li><Link to="/help" className="hover:text-amber-400 transition">Help Center</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact</h5>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start"><FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 mr-3 text-amber-400" />123 Innovation Drive, Tech City</li>
              <li className="flex items-start"><FontAwesomeIcon icon={faPhoneAlt} className="mt-1 mr-3 text-amber-400" />+1 (800) 123-4567</li>
              <li className="flex items-start"><FontAwesomeIcon icon={faEnvelope} className="mt-1 mr-3 text-amber-400" />support@projecta.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0 text-gray-400">
            © {new Date().getFullYear()} Project A Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-amber-400 transition">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-amber-400 transition">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-amber-400 transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
