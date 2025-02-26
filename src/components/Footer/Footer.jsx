import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-wider">ACCREDIAN</h3>
            <p className="text-gray-300 mt-4">Empowering the next generation of tech professionals with cutting-edge education and skills.</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-blue-500 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                <span className="mr-2">›</span>Home
              </a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                <span className="mr-2">›</span>Courses
              </a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                <span className="mr-2">›</span>About Us
              </a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                <span className="mr-2">›</span>Contact
              </a></li>
              <li><a href="#privacy" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                <span className="mr-2">›</span>Privacy Policy
              </a></li>
              <li><a href="#terms" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                <span className="mr-2">›</span>Terms & Conditions
              </a></li>
              <li><a href="#refund" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                <span className="mr-2">›</span>Refund Policy
              </a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-blue-500 pb-2 inline-block">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">1234 Tech Park, Silicon Valley, California, USA 94025</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">support@accredian.com</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#facebook" className="bg-gray-700 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#twitter" className="bg-gray-700 hover:bg-blue-400 p-2 rounded-full transition-colors duration-300">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#instagram" className="bg-gray-700 hover:bg-pink-600 p-2 rounded-full transition-colors duration-300">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#linkedin" className="bg-gray-700 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="#youtube" className="bg-gray-700 hover:bg-red-600 p-2 rounded-full transition-colors duration-300">
                <FaYoutube className="text-lg" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-blue-500 pb-2 inline-block">Stay Connected</h4>
            <p className="text-gray-300">Stay updated with our latest courses, promotions, and educational content.</p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="p-3 rounded-md text-gray-800 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" 
              />
              <button className="bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Accredian. All Rights Reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Designed with ♥ for tech enthusiasts</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;