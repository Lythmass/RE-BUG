import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export const loginAction = async (formData: FormData) => {
  const response = await instance.post('/users/login', formData);
  return response;
};

export const registerAction = async (formData: FormData) => {
  const response = await instance.post('/users/register', formData);
  return response;
};

export const getUserDataAction = async () => {
  const response = await instance.get('/users/user');
  return response;
};
