import { UseFormRegister, UseFormSetError } from 'react-hook-form';

export type AuthInputType = {
  type: 'text' | 'email' | 'password';
  name:
    | 'password'
    | 'username'
    | 'email'
    | 'first_name'
    | 'last_name'
    | 'company_name';
  placeholder: string;
  register: UseFormRegister<AuthTypes>;
  errors: UseFormSetError;
};
