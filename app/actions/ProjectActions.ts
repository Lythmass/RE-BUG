import { instance } from './instance';

export const createProjectAction = async (data: FormData) => {
  const response = await instance.post('/projects/create', data);
  return response;
};
