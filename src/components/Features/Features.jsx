import React from 'react';
import { FaUserFriends, FaGift, FaPercent } from 'react-icons/fa';

const Features = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-70 translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">How Do I <span className="text-blue-600">Earn?</span></h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">Follow these simple steps to start earning rewards through our referral program</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Card 1 */}
                    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                        <div className="h-2 bg-blue-600 w-full"></div>
                        <div className="p-8">
                            <div className="flex justify-center items-center w-20 h-20 bg-blue-100 text-blue-600 rounded-full text-4xl mx-auto mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <FaUserFriends />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">1. Invite your friends</h3>
                            <p className="text-gray-600 leading-relaxed">Share your unique referral link with friends who would benefit from our premium tech courses.</p>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <a href="#" className="text-blue-600 font-medium group-hover:text-blue-800 flex items-center justify-center">
                                    Get Your Link
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                        <div className="h-2 bg-green-500 w-full"></div>
                        <div className="p-8">
                            <div className="flex justify-center items-center w-20 h-20 bg-green-100 text-green-500 rounded-full text-4xl mx-auto mb-8 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                                <FaGift />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">2. Friends make a purchase</h3>
                            <p className="text-gray-600 leading-relaxed">Your friends get an exclusive 10% discount on their first purchase with your referral code.</p>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <div className="flex justify-center">
                                    <span className="bg-green-100 text-green-600 text-sm font-medium px-4 py-1 rounded-full">10% OFF</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                        <div className="h-2 bg-purple-600 w-full"></div>
                        <div className="p-8">
                            <div className="flex justify-center items-center w-20 h-20 bg-purple-100 text-purple-600 rounded-full text-4xl mx-auto mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                <FaPercent />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">3. You get rewarded</h3>
                            <p className="text-gray-600 leading-relaxed">Earn up to 20% commission for each successful referral based on the course purchased.</p>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <div className="flex justify-center">
                                    <span className="bg-purple-100 text-purple-600 text-sm font-medium px-4 py-1 rounded-full">Up to 20% Commission</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16">
                    <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-200">
                        Start Referring Now
                    </button>
                    <p className="mt-4 text-gray-500">Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign in</a> to view your referrals</p>
                </div>
            </div>
        </section>
    );
};

export default Features;