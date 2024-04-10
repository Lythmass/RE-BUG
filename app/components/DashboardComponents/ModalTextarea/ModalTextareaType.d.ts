import { UseFormRegister, UseFormSetError } from 'react-hook-form';

export type ModalTextareaType = {
  methods: { register: UseFormRegister; formState: UseFormSetError };
  initialValue?: string;
  name: 'description' | 'solution';
};
