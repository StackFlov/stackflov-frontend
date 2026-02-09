import api from '../utils/api';

export const checkIn = async () => {
  try {
    // 우리가 컨트롤러에서 설정한 경로로 POST 요청을 보냅니다.
    const response = await api.post('/attendance/check-in');
    return response.data;
  } catch (error) {
    // 이미 출석했거나 에러가 발생한 경우 에러 메시지를 던집니다.
    throw error.response?.data || "출석 체크 중 오류가 발생했습니다.";
  }
};