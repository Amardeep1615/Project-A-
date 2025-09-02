// src/components/Footer.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">A</span>
              </div>
              <h4 className="text-xl font-bold">Project A Solutions</h4>
            </div>
            <p className="text-gray-400 mb-4">
              Delivering innovative digital solutions for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-xl" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faFacebook} className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-xl" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Company</h5>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="text-gray-400 hover:text-white transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/press"
                  className="text-gray-400 hover:text-white transition"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Resources</h5>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/docs"
                  className="text-gray-400 hover:text-white transition"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/guides"
                  className="text-gray-400 hover:text-white transition"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  to="/status"
                  className="text-gray-400 hover:text-white transition"
                >
                  API Status
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="text-gray-400 hover:text-white transition"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact</h5>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mt-1 mr-3 text-amber-500"
                />
                <span>123 Innovation Drive, Tech City, CA 94016</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="mt-1 mr-3 text-amber-500"
                />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mt-1 mr-3 text-amber-500"
                />
                <span>support@projecta.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0 text-gray-500">
            © {new Date().getFullYear()} Project A Solutions. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-gray-500 hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-500 hover:text-white transition"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookies"
              className="text-gray-500 hover:text-white transition"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
