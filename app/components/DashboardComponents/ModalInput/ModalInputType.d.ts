import { UseFormRegister, UseFormSetError } from 'react-hook-form';

export type ModalInputType = {
  name: string;
  placeholder: string;
  register: UseFormRegister;
  errors: UseFormSetError;
};
