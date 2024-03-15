import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  withCredentials: true,
});

export const loginAction = async (formData: FormData) => {
  const response = await instance.post('/users/login', formData);
  return response;
};
