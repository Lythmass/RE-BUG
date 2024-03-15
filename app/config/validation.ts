export const validation = {
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
  password: {
    required: 'Password is required.',
    minLength: { value: 8, message: 'Username must be more than 8' },
    maxLength: { value: 40, message: 'Username must be less than 40' },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!-)])(?!.*[^a-zA-Z0-9!-)]).+$/,
      message: 'Only 1 capital, 1 lowercase, any !@#$%^&*(), 1 number',
    },
  },
};
