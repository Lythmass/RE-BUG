import { Router } from 'next/navigation';

export type AuthExceptionType = {
  action: (formData: FormData) => void;
  formData: FormData;
  router: Router;
  methods: any;
};
