import axios from "axios";
import Cookies from "js-cookie";


export const fetchFeed = async ({ page = 0, size = 20, sort = "createdAt,desc" } = {}) => {
const accessToken = Cookies.get("accessToken");
const res = await axios.get(`https://api.stackflov.com/boards/feed`, {
params: { page, size, sort },
headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
withCredentials: true,
});
// Spring Page payload: { content, totalPages, totalElements, number, size, ... }
return res.data;
};