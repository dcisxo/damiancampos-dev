import api from "./axiosInstance";

export const submitContact = async (formData) => {
  const { data } = await api.post("/contact", formData);
  return data;
};
