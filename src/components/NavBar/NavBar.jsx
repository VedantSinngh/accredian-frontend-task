"use client";
import { useState } from 'react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h3 className="text-2xl font-bold text-gray-800 tracking-tight">
              <span className="text-blue-600">ACCRED</span>IAN
            </h3>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-700 hover:text-blue-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-blue-600 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Refer & Earn
                </a>
              </li>
              <li>
                <a 
                  href="#courses" 
                  className="text-gray-700 hover:text-blue-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-blue-600 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-700 hover:text-blue-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-blue-600 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-700 hover:text-blue-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-blue-600 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-700 hover:text-blue-600 font-medium relative after:absolute after:bottom-0 after:left-0 after:bg-blue-600 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Side Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <select className="bg-gray-50 border border-gray-300 text-gray-700 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200">
              <option>Eng (US)</option>
              <option>Hindi</option>
            </select>
            <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 font-medium transition-all duration-200">
              Log In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium shadow-sm hover:shadow transition-all duration-200">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="outline-none"
              aria-label="Toggle menu"
            >
              {!isMenuOpen ? (
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-4 space-y-1 bg-gray-50">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
              Refer & Earn
            </a>
            <a href="#courses" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
              Courses
            </a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
              Services
            </a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
              About Us
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
              Contact
            </a>
            <div className="pt-4 border-t border-gray-200">
              <select className="block w-full bg-gray-50 border border-gray-300 text-gray-700 rounded-lg px-3 py-2 mb-3">
                <option>Eng (US)</option>
                <option>Hindi</option>
              </select>
              <div className="flex space-x-2">
                <button className="w-1/2 bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-lg">
                  Log In
                </button>
                <button className="w-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;