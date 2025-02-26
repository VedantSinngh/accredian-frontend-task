"use client";
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqItems = [
        {
            question: "How can I refer friends to Accredian courses?",
            answer: "You can refer friends by clicking on the 'Refer Now' button and filling out the referral form with your friend's details. We'll send them an invitation email with your referral code."
        },
        {
            question: "What rewards will I get when my friend enrolls?",
            answer: "You'll receive a reward amount based on the course your friend enrolls in. The reward amounts range from ₹1,500 to ₹3,000 as shown in our rewards table."
        },
        {
            question: "When do referral rewards get credited to my account?",
            answer: "Referral rewards are credited to your account after your friend successfully completes the enrollment process and makes the payment for their course."
        }
    ];

    const toggleAccordion = (index) => setActiveIndex(activeIndex === index ? null : index);

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-800">
                    Frequently Asked Questions
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Find answers to common questions about our referral program
                </p>
                <div className="space-y-6">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={`border border-blue-100 rounded-xl shadow-sm transition-all duration-300 ${activeIndex === index ? 'shadow-md' : 'hover:shadow'
                                }`}
                        >
                            <div
                                className={`p-5 flex justify-between items-center cursor-pointer transition-colors duration-300 ${activeIndex === index
                                        ? 'bg-blue-600 text-white rounded-t-xl'
                                        : 'bg-white text-gray-800 rounded-xl hover:bg-blue-50'
                                    }`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3 className="font-semibold text-lg pr-4">{item.question}</h3>
                                <div className="text-lg flex-shrink-0">
                                    {activeIndex === index ? (
                                        <FaChevronUp className="text-white transition-transform duration-300 transform rotate-0" />
                                    ) : (
                                        <FaChevronDown className="transition-transform duration-300 transform rotate-0" />
                                    )}
                                </div>
                            </div>
                            <div
                                className={`transition-all duration-300 overflow-hidden ${activeIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="p-5 bg-white rounded-b-xl">
                                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;