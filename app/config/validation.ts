export const validation = {
  first_name: {
    required: 'First name is required.',
    minLength: { value: 2, message: 'Name must be more than 2' },
    pattern: {
      value: /^[a-zA-Z]+$/,
      message: 'Enter only letters',
    },
  },
  last_name: {
    required: 'First name is required.',
    minLength: { value: 2, message: 'Last name must be more than 2' },
    pattern: {
      value: /^[a-zA-Z]+$/,
      message: 'Enter only letters',
    },
  },
  email: {
    required: 'Email is required.',
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: 'Invalid email format',
    },
  },
  username: {
    required: 'Username is required.',
    minLength: { value: 4, message: 'Username must be more than 4' },
    maxLength: { value: 12, message: 'Username must be less than 12' },
    pattern: {
      value: /^[a-zA-Z0-9!-)]+$/,
      message: "Such symbol isn't allowed!",
    },
  },
  company_name: {
    required: 'Company name is required.',
    minLength: { value: 3, message: 'Name must be more than 3' },
    maxLength: { value: 30, message: 'Name must be less than 20' },
    pattern: {
      value: /^[a-zA-Z0-9 ]+$/,
      message: "Such symbol isn't allowed!",
    },
  },
  password: {
    required: 'Password is required.',
    minLength: { value: 8, message: 'Username must be more than 8' },
    maxLength: { value: 40, message: 'Username must be less than 40' },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*())])(?!.*[^a-zA-Z0-9!@#$%^&*())]).+$/,
      message: 'a-z, A-Z, 0-9, !@#$%^&*()',
    },
  },
};
