import axios from 'axios';

const API_BASE_URL = 'https://accredian-backend.onrender.com';

export const submitReferral = async (referralData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/referrals`, referralData);
    return response.data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message || error.message || 'Failed to submit referral';
    throw new Error(errorMessage);
  }
};
