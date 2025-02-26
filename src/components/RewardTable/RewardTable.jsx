import React from 'react';
import { FaCheck, FaExternalLinkAlt, FaGift, FaUserFriends } from 'react-icons/fa';

const RewardTable = () => {
  const rewardData = [
    { course: "Web Development Bootcamp", referralBonus: "₹ 2,000", friendsDiscount: "₹ 1,000" },
    { course: "Data Science Specialization", referralBonus: "₹ 2,500", friendsDiscount: "₹ 1,500" },
    { course: "UI/UX Design Professional", referralBonus: "₹ 2,000", friendsDiscount: "₹ 1,000" },
    { course: "Digital Marketing Course", referralBonus: "₹ 1,500", friendsDiscount: "₹ 1,000" },
    { course: "Python Programming Certification", referralBonus: "₹ 1,800", friendsDiscount: "₹ 1,200" },
    { course: "Machine Learning Specialization", referralBonus: "₹ 3,000", friendsDiscount: "₹ 2,000" }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Referral Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Are The Rewards & Benefits?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Refer your friends to our courses and both of you will receive these amazing rewards.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row text-center md:text-left bg-blue-50 border-b border-blue-100">
            <div className="flex-1 p-6 md:pl-8 border-b md:border-b-0 md:border-r border-blue-100">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 text-blue-800">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <FaExternalLinkAlt className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Referral Program Details</h3>
                  <p className="text-sm text-blue-700">Select any course to refer</p>
                </div>
              </div>
            </div>
            <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-blue-100">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 text-blue-800">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <FaGift className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Your Reward</h3>
                  <p className="text-sm text-blue-700">Cash bonus for each referral</p>
                </div>
              </div>
            </div>
            <div className="flex-1 p-6 md:pr-8">
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 text-blue-800">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  <FaUserFriends className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Friend's Discount</h3>
                  <p className="text-sm text-blue-700">Savings on course fee</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <tbody>
                {rewardData.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`border-b hover:bg-blue-50 transition-colors duration-150 ${
                      index === rewardData.length - 1 ? 'border-0' : ''
                    }`}
                  >
                    <td className="py-5 px-6 md:px-8">
                      <div className="flex items-center">
                        <div className="mr-3 bg-green-100 p-2 rounded-full">
                          <FaCheck className="text-green-600" />
                        </div>
                        <span className="font-medium text-gray-800">{item.course}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 md:px-8">
                      <span className="font-bold text-lg text-blue-600">{item.referralBonus}</span>
                    </td>
                    <td className="py-5 px-6 md:px-8">
                      <span className="font-bold text-lg text-green-600">{item.friendsDiscount}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl font-medium text-lg flex items-center mx-auto gap-2">
            <FaUserFriends className="text-blue-200" />
            Refer a Friend
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Terms and conditions apply. Rewards are processed within 7 days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RewardTable;