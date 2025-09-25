// src/components/Footer.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center shadow-lg">
                <span className="text-blue-900 font-bold text-base">A</span>
              </div>
              <h4 className="text-lg font-bold">Project A Solutions</h4>
            </div>
            <p className="text-gray-300 text-sm mb-2">
              Delivering innovative digital solutions for learners and businesses worldwide.
            </p>
            <div className="flex space-x-3 mt-1">
              {[faTwitter, faFacebook, faLinkedin, faInstagram].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-300 hover:text-amber-400 transition-all duration-300 text-sm"
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-base font-semibold mb-2">Company</h5>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/about" className="hover:text-amber-400 transition hover:font-medium">About Us</Link></li>
              <li><Link to="/career" className="hover:text-amber-400 transition hover:font-medium">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-amber-400 transition hover:font-medium">Blog</Link></li>
              <li><Link to="/press" className="hover:text-amber-400 transition hover:font-medium">Press</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-base font-semibold mb-2">Resources</h5>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/docs" className="hover:text-amber-400 transition hover:font-medium" >Documentation</Link></li>
              <li><Link to="/guides" className="hover:text-amber-400 transition hover:font-medium">Guides</Link></li>
              <li><Link to="/status" className="hover:text-amber-400 transition hover:font-medium">API Status</Link></li>
              <li><Link to="/help" className="hover:text-amber-400 transition hover:font-medium">Help Center</Link></li>
            </ul>
          </div>
{/* Contact */}
<div>
  <h5 className="text-base font-semibold mb-2">Contact</h5>
  <ul className="space-y-2 text-gray-300 text-sm">
    <li className="flex items-start">
      <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 mr-3 text-amber-400 hover:font-medium" />
      <Link to="/location" className="hover:text-amber-500 transition">K.P.H.B Hyderabad</Link>
    </li>
    <li className="flex items-start">
      <FontAwesomeIcon icon={faPhoneAlt} className="mt-1 mr-3 text-amber-400 hover:font-medium" />
      <a href="mobile" className="hover:text-amber-500 transition">81790401516</a>
    </li>
    <li className="flex items-start">
      <FontAwesomeIcon icon={faEnvelope} className="mt-1 mr-3 text-amber-400 hover:font-medium" />
      <a href="mail" className="hover:text-amber-500 transition">tmk.ProjectA@gmail.com</a>
    </li>
  </ul>
  </div>
</div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="mb-2 md:mb-0 text-gray-400">
            © {new Date().getFullYear()} Project A Solutions. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-gray-400 hover:text-amber-400 transition hover:font-medium">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-amber-400 transition hover:font-medium">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-amber-400 transition hover:font-medium">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;