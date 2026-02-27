import api from '../utils/api';

export const checkIn = async () => {
  try {
    const response = await api.post('/attendance/check-in');
    return response.data;
  } catch (error) {
    throw error.response?.data || "출석 체크 중 오류가 발생했습니다.";
  }
};