import { UseFormRegister, UseFormSetError } from 'react-hook-form';
import { SeverityType, StatusType } from 'types';

export type ModalDropdownType = {
  methods: { register: UseFormRegister; formState: UseFormSetError };
  name: 'status_id' | 'severity_id';
  items: SeverityType | StatusType;
  title: 'Severity' | 'Status';
  initialValue: number;
};
