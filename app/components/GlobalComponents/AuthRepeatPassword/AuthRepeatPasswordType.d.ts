export type AuthRepeatPasswordType = {
  register: UseFormRegister<{ confirm_password: string }>;
  errors: UseFormSetError;
  control: UseFormGetValues<{ confirm_password: string }>;
};
