import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/referrals';

export const submitReferral = async (referralData) => {
  try {
    const response = await axios.post(`${API_URL}/referrals`, referralData);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || 'Failed to submit referral';
    throw new Error(errorMessage);
  }
};