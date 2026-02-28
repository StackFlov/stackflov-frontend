import api from "../utils/api";

export const checkIn = async () => {
  try {
    const response = await api.post("/attendance/check-in");
    return response.data; 
  } catch (error) {
    const data = error?.response?.data;
    if (typeof data === "string") throw data;
    if (data?.message) throw data.message;

    throw "출석 체크 중 오류가 발생했습니다.";
  }
};