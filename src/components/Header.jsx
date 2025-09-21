import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun, faSearch } from "@fortawesome/free-solid-svg-icons";
import searchData from "./SearchData";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // Dark mode toggle
  useEffect(() => {
    const html = document.documentElement;
    darkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [darkMode]);

  // Filter results when typing
  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (!query.trim()) {
      setResults([]);
      return;
    }

    const filtered = searchData.filter(
      (item) =>
        item.keyword.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
    setResults(filtered);
  };

  // Navigate when selecting
  const handleSelectResult = (link) => {
    navigate(link);
    setSearchQuery("");
    setResults([]);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shadow-md">
            <span className="text-blue-900 font-bold text-xl">A</span>
          </div>
          <h1 className="text-3xl font-bold  tracking-wide">
            Project <span className="text-yellow-400">A</span>
          </h1>

          {/* Search bar */}
          <div className="relative ml-4 hidden sm:flex items-center">
            <div className="flex items-center bg-white rounded-full px-3 py-1 shadow-sm">
              <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search subjects..."
                value={searchQuery}
                onChange={handleInputChange}
                className="bg-transparent focus:outline-none text-black text-sm w-full"
              />
            </div>

            {/* Search results dropdown */}
            {results.length > 0 && (
              <div className="absolute top-12 left-0 w-64 bg-white rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                {results.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSelectResult(item.link)}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-black"
                  >
                    <span className="font-semibold">{item.keyword}</span>
                    <span className="text-gray-500 text-sm ml-2">
                      ({item.category})
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-3 text-yellow-300 hover:text-white transition"
            title="Toggle Dark Mode"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-lg" />
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="hover:text-amber-500 transition-colors font-medium">
            Home
          </Link>
          <Link to="/about" className="hover:text-amber-500 transition-colors font-medium">
            About
          </Link>
          <Link to="/services" className="hover:text-amber-500 transition-colors font-medium">
            Services
          </Link>
          <Link to="/contact" className="hover:text-amber-500 transition-colors font-medium">
            Contact
          </Link>
          <Link
            to="/GetStarted"
            className="ml-4 bg-amber-500 text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
          <Link to="/Signin" className="hover:text-amber-500 transition-colors font-medium">
            Signin
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          id="menu-toggle"
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-blue-800 dark:bg-gray-900 px-6 py-4 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-4">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>
            Services
          </Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
          <Link
            to="/GetStarted"
            className="bg-amber-500 text-blue-900 px-4 py-2 rounded-full text-center font-semibold mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
