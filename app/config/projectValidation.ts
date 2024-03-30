export const projectValidation = {
  required: 'Name is required!',
  minLength: { value: 3, message: 'Name must be more than 4' },
  maxLength: { value: 30, message: 'Name must be less than 20' },
  pattern: {
    value: /^[a-zA-Z0-9 ]+$/,
    message: "Such symbol isn't allowed!",
  },
};
