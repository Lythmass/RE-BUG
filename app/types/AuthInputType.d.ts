import { UseFormRegister, UseFormSetError } from 'react-hook-form';

export type AuthInputType = {
  type: 'text' | 'email' | 'password';
  name: 'password' | 'username' | 'email';
  placeholder: string;
  register: UseFormRegister<AuthTypes>;
  errors: UseFormSetError;
};
