import {
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetError,
  UseFormWatch,
} from 'react-hook-form';

export type AuthRegisterFormType = {
  methods: {
    register: UseFormRegister;
    formState: UseFormSetError;
    handleSubmit: UseFormHandleSubmit;
    control: UseFormWatch;
  };
};
