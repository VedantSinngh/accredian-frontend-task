"use client";

import { useState } from 'react';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { submitReferral } from '../../services/api';

const InputField = ({ icon, label, name, type = "text", value, onChange, error, placeholder }) => (
    <div className="space-y-1">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                {icon}
            </div>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className={`pl-10 block w-full py-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-200`}
                placeholder={placeholder}
            />
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
);

const ReferralModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        referrerName: '',
        referrerEmail: '',
        referrerPhone: '',
        refereeFirstName: '',
        refereeLastName: '',
        refereeEmail: '',
        refereePhone: '',
        courseInterest: '',
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const courseOptions = [
        { value: "web-development", label: "Web Development Bootcamp" },
        { value: "data-science", label: "Data Science Specialization" },
        { value: "ui-ux", label: "UI/UX Design Professional" },
        { value: "digital-marketing", label: "Digital Marketing Course" },
        { value: "python", label: "Python Programming Certification" },
        { value: "machine-learning", label: "Machine Learning Specialization" },
        { value: "full-stack-development", label: "Full Stack Development" } // Added your course
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: prevErrors[name] ? '' : prevErrors[name],
        }));
    };

    const validateStep = (step) => {
        const newErrors = {};
        if (step === 1) {
            if (!formData.referrerName.trim()) newErrors.referrerName = 'Name is required';
            if (!formData.referrerEmail.trim()) newErrors.referrerEmail = 'Email is required';
            else if (!/\S+@\S+\.\S+/.test(formData.referrerEmail)) newErrors.referrerEmail = 'Please enter a valid email';
            if (!formData.referrerPhone.trim()) newErrors.referrerPhone = 'Phone number is required';
            else if (!/^\d{10}$/.test(formData.referrerPhone.replace(/[^0-9]/g, ''))) newErrors.referrerPhone = 'Please enter a valid 10-digit number';
        } else {
            if (!formData.refereeFirstName.trim()) newErrors.refereeFirstName = 'Friend\'s first name is required';
            if (!formData.refereeLastName.trim()) newErrors.refereeLastName = 'Friend\'s last name is required';
            if (!formData.refereeEmail.trim()) newErrors.refereeEmail = 'Friend\'s email is required';
            else if (!/\S+@\S+\.\S+/.test(formData.refereeEmail)) newErrors.refereeEmail = 'Please enter a valid email';
            if (!formData.refereePhone.trim()) newErrors.refereePhone = 'Friend\'s phone number is required';
            else if (!/^\d{10}$/.test(formData.refereePhone.replace(/[^0-9]/g, ''))) newErrors.refereePhone = 'Please enter a valid 10-digit number';
            if (!formData.courseInterest) newErrors.courseInterest = 'Please select a course';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep(1)) {
            setCurrentStep(2);
        }
    };

    const prevStep = () => {
        setCurrentStep(1);
    };

    const validateForm = () => {
        return validateStep(currentStep);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            // Transform formData to match backend expectation
            const submissionData = {
                referrerName: formData.referrerName,
                referrerEmail: formData.referrerEmail,
                referrerPhone: formData.referrerPhone,
                refereeName: `${formData.refereeFirstName} ${formData.refereeLastName}`, // Combine names
                refereeEmail: formData.refereeEmail,
                refereePhone: formData.refereePhone,
                courseInterest: formData.courseInterest,
            };

            const response = await submitReferral(submissionData);
            if (response && response.success) {
                setSubmitSuccess(true);
                setTimeout(() => onClose(), 3000);
            } else {
                throw new Error('Unexpected response from server');
            }
        } catch (error) {
            console.error('Error submitting referral:', error);
            setErrors((prevErrors) => ({
                ...prevErrors,
                submit: error.message || 'Failed to submit referral. Please try again.',
            }));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl transform transition-all">
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                        <span>Refer a Friend</span>
                        {!submitSuccess && <span className="text-sm font-normal text-blue-100 ml-2">Step {currentStep} of 2</span>}
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="text-white p-2 hover:bg-blue-700 rounded-full transition duration-200"
                        aria-label="Close modal"
                    >
                        <FaTimes />
                    </button>
                </div>

                {!submitSuccess && (
                    <div className="w-full bg-gray-200 h-1">
                        <div className="bg-blue-500 h-1 transition-all duration-300" style={{ width: currentStep === 1 ? '50%' : '100%' }}></div>
                    </div>
                )}

                {submitSuccess ? (
                    <div className="p-12 text-center">
                        <div className="mx-auto w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mb-6">
                            <FaCheckCircle />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">Referral Sent Successfully!</h3>
                        <p className="text-gray-600 mb-4">Thank you for referring your friend. They will receive an email with details about our courses.</p>
                        <p className="text-gray-600 mb-8">You'll be notified when they enroll to receive your reward.</p>
                        <button 
                            onClick={onClose}
                            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200 shadow-sm"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="p-6">
                        {currentStep === 1 ? (
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-gray-700 mb-4">Your Information</h3>
                                <InputField 
                                    icon={<FaUser />}
                                    label="Your Name"
                                    name="referrerName"
                                    value={formData.referrerName}
                                    onChange={handleChange}
                                    error={errors.referrerName}
                                    placeholder="Enter your full name"
                                />
                                <InputField 
                                    icon={<FaEnvelope />}
                                    label="Your Email"
                                    name="referrerEmail"
                                    type="email"
                                    value={formData.referrerEmail}
                                    onChange={handleChange}
                                    error={errors.referrerEmail}
                                    placeholder="Enter your email address"
                                />
                                <InputField 
                                    icon={<FaPhone />}
                                    label="Your Phone Number"
                                    name="referrerPhone"
                                    value={formData.referrerPhone}
                                    onChange={handleChange}
                                    error={errors.referrerPhone}
                                    placeholder="Enter your phone number"
                                />
                                <div className="flex justify-end pt-4">
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200 shadow-sm flex items-center"
                                    >
                                        Continue <FaArrowRight className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold text-gray-700 mb-4">Friend's Information</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <InputField 
                                        icon={<FaUser />}
                                        label="Friend's First Name"
                                        name="refereeFirstName"
                                        value={formData.refereeFirstName}
                                        onChange={handleChange}
                                        error={errors.refereeFirstName}
                                        placeholder="Enter first name"
                                    />
                                    <InputField 
                                        icon={<FaUser />}
                                        label="Friend's Last Name"
                                        name="refereeLastName"
                                        value={formData.refereeLastName}
                                        onChange={handleChange}
                                        error={errors.refereeLastName}
                                        placeholder="Enter last name"
                                    />
                                </div>
                                <InputField 
                                    icon={<FaEnvelope />}
                                    label="Friend's Email"
                                    name="refereeEmail"
                                    type="email"
                                    value={formData.refereeEmail}
                                    onChange={handleChange}
                                    error={errors.refereeEmail}
                                    placeholder="Enter your friend's email"
                                />
                                <InputField 
                                    icon={<FaPhone />}
                                    label="Friend's Phone Number"
                                    name="refereePhone"
                                    value={formData.refereePhone}
                                    onChange={handleChange}
                                    error={errors.refereePhone}
                                    placeholder="Enter your friend's phone number"
                                />
                                <div className="space-y-1">
                                    <label htmlFor="courseInterest" className="block text-sm font-medium text-gray-700">
                                        Course Your Friend May Be Interested In
                                    </label>
                                    <div className="relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                            <FaGraduationCap />
                                        </div>
                                        <select
                                            name="courseInterest"
                                            id="courseInterest"
                                            value={formData.courseInterest}
                                            onChange={handleChange}
                                            className={`pl-10 block w-full py-3 border ${errors.courseInterest ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-200`}
                                        >
                                            <option value="">Select a course</option>
                                            {courseOptions.map(option => (
                                                <option key={option.value} value={option.value}>{option.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                    {errors.courseInterest && <p className="mt-1 text-sm text-red-600">{errors.courseInterest}</p>}
                                </div>
                                <div className="flex justify-between pt-4">
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="px-6 py-3 bg-white text-gray-700 border border-gray-300 font-medium rounded-lg hover:bg-gray-50 transition duration-200"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200 shadow-sm flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit Referral'}
                                    </button>
                                </div>
                                {errors.submit && <p className="mt-4 text-sm text-red-600 text-center">{errors.submit}</p>}
                            </div>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
};

export default ReferralModal;