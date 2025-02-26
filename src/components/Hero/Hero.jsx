"use client";

import { useState } from 'react';
import ReferralModal from '@/components/ReferralModal/ReferralModal';
import Image from 'next/image';
import { FaUserFriends, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 md:py-28">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="md:w-1/2 space-y-8">
                        <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-800 font-medium text-sm mb-2">
                            <FaUserFriends className="inline mr-2" /> Referral Program
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
                            Let's Learn <span className="text-blue-600">&</span> Earn
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 max-w-md">
                            Get a discount of up to <span className="font-bold text-blue-600">10%</span> when you refer friends to join our learning community.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                                onClick={handleOpenModal}
                            >
                                Refer Now
                                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>

                            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                                Learn More
                            </button>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <div className="flex -space-x-2">
                                <div className="w-10 h-10 rounded-full bg-blue-400 border-2 border-white overflow-hidden"></div>
                                <div className="w-10 h-10 rounded-full bg-green-400 border-2 border-white overflow-hidden"></div>
                                <div className="w-10 h-10 rounded-full bg-orange-400 border-2 border-white overflow-hidden"></div>
                            </div>
                            <p className="text-gray-600"><span className="font-bold">500+</span> students already joined</p>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="md:w-1/2 relative">
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-100 rounded-full z-0"></div>
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-100 rounded-full z-0"></div>

                            <div className="relative z-10 bg-white p-4 rounded-3xl shadow-xl">
                                <Image
                                    src="/person-image.png"
                                    alt="Phone"
                                    width={500}
                                    height={500}
                                    className="w-3/5 mx-auto rounded-xl relative z-10"
                                />

                                <div className="absolute right-0 bottom-0 transform translate-x-1/4 z-20">
                                    <Image
                                        src="/phone-mockup.png"
                                        alt="Person"
                                        width={300}
                                        height={300}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && <ReferralModal onClose={handleCloseModal} />}
        </section>
    );
};

export default Hero;