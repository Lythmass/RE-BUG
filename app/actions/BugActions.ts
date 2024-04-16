import { instance } from './instance';

export const createBugAction = async (data: FormData) => {
  const response = await instance.post('/bugs/create', data);
  return response;
};

export const updateBugAction = async (data: FormData) => {
  const response = await instance.post('/bugs/update', data);
  return response;
};

export const deleteBugAction = async (bugId: string | string[]) => {
  const response = await instance.post(`/bugs/delete/${bugId}`);
  return response;
};
