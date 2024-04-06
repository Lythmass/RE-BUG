import { AuthTypes } from 'types';

export const fillFormData = (data: AuthTypes) => {
  const formData = new FormData();
  for (let i = 0; i < Object.keys(data).length; i++) {
    formData.append(Object.keys(data)[i], Object.values(data)[i]);
  }
  return formData;
};
