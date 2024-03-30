import { instance } from './instance';

export const loginAction = async (formData: FormData) => {
  const response = await instance.post('/users/login', formData);
  return response;
};

export const registerAction = async (formData: FormData) => {
  const response = await instance.post('/users/register', formData);
  return response;
};

export const logoutAction = async () => {
  const response = await instance.post('/users/logout');
  return response;
};
