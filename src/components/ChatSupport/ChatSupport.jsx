import React from 'react';
import { FaCommentDots, FaArrowRight } from 'react-icons/fa';

const ChatSupport = () => {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-500">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-10 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl">
                    <div className="flex flex-col md:flex-row items-center md:space-x-5">
                        <div className="text-blue-600 text-5xl mb-4 md:mb-0">
                            <FaCommentDots className="transform hover:scale-110 transition-transform duration-300" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center md:text-left">
                            Need to solve doubts related to program?
                        </h3>
                    </div>
                    <button className="mt-6 md:mt-0 bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-3 hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-md">
                        <span className="font-medium">Chat with us</span>
                        <FaArrowRight className="animate-pulse" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ChatSupport;