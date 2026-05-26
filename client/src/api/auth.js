import api from "./axiosInstance";

export const login = async (credentials) => {
  const { data } = await api.post("/auth/login", credentials);
  return data; // { token }
};

export const saveToken = (token) => localStorage.setItem("adminToken", token);
export const getToken = () => localStorage.getItem("adminToken");
export const removeToken = () => localStorage.removeItem("adminToken");
export const isAuthenticated = () => Boolean(getToken());
