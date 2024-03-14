import { UseFormRegister, UseFormSetError } from 'react-hook-form';

export type AuthInputType = {
  type: 'text' | 'email' | 'password';
  name: 'password' | 'username';
  placeholder: string;
  register: UseFormRegister<{ username: string; password: string }>;
  errors: UseFormSetError;
};
