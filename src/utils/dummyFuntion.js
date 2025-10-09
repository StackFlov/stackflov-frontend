import axios from "axios";

const baseUrl = "https://api.stackflov.com/";

export const handleTest1 = (body) => {
  axios.put(`${baseUrl}/users/users/me`, body, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const handleTest2 = () => {
  axios.get(`${baseUrl}/users/me`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const handleTest3 = () => {
  axios.get(`${baseUrl}/boards/{boardId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const handleTest4 = (body) => {
  axios.put(`${baseUrl}/boards/{boardId}`, body, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const handleTest5 = () => {
  axios.delete(`${baseUrl}/boards/{boardId}`, body, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const handleTest6 = () => {
  axios.get(`${baseUrl}/boards`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const handleTest7 = (body) => {
  axios.post(`${baseUrl}/boards`, body, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const handleTest8 = (body) => {
  axios.post(`${baseUrl}/redis/save`, body, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const handleTest9 = () => {
  axios.get(`${baseUrl}/redis/get`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const handleTest10 = () => {
  axios.delete(`${baseUrl}/redis/delete`, body, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const handleTest11 = (body) => {
  axios.post(`${baseUrl}/auth/reissue`, body, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const handleTest12 = (body) => {
  axios.post(`${baseUrl}/auth/register`, body, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const handleTest13 = (body) => {
  axios.post(`${baseUrl}/auth/logout`, body, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const handleTest14 = (body) => {
  axios.post(`${baseUrl}/auth/login`, body, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const handleTest15 = (body) => {
  axios.post(`${baseUrl}/auth/email/verify`, body, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const handleTest16 = (body) => {
  axios.post(`${baseUrl}/auth/email/send`, body, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};

export const handleTest17 = () => {
  axios.get(`${baseUrl}/hello`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
};
