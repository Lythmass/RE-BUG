import { ReactNode } from 'react';
import { UseFormHandleSubmit } from 'react-hook-form';

export type ModalType = {
  children: ReactNode;
  methods: { handleSubmit: UseFormHandleSubmit };
  handleSubmit: (data: any) => void;
  handleClose: () => void;
  title: string;
};
