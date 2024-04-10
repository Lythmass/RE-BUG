import { instance } from './instance';

export const createBugAction = async (data: FormData) => {
  const response = await instance.post('/bugs/create', data);
  return response;
};

export const updateBugAction = async (data: FormData) => {
  const response = await instance.post('/bugs/update', data);
  return response;
};
