import { resetFormData } from 'helpers';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {
  UseFormGetValues,
  UseFormResetField,
  UseFormSetValue,
} from 'react-hook-form';

export const handleClose = (
  pathname: string,
  router: AppRouterInstance,
  methods: {
    getValues: UseFormGetValues<any>;
    resetField: UseFormResetField<any>;
    setValue: UseFormSetValue<any>;
  },
) => {
  router.push(pathname);
  resetFormData(methods.getValues(), methods);
};
