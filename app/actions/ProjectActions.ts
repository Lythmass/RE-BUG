import { instance } from './instance';

export const createProjectAction = async (title: string) => {
  const response = await instance.post('/projects/create', title);
  return response;
};
