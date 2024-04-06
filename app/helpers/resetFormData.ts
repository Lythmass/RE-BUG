import { UseFormResetField, UseFormSetValue } from 'react-hook-form';

export const resetFormData = (
  data: any,
  methods: {
    resetField: UseFormResetField<any>;
    setValue: UseFormSetValue<any>;
  },
) => {
  for (let i = 0; i < Object.keys(data).length; i++) {
    if (Object.keys(data)[i] === 'severity_id') {
      methods.setValue('severity_id', 0);
    } else {
      methods.resetField(Object.keys(data)[i]);
    }
  }
};
