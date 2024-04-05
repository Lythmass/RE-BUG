export const projectValidation = {
  project: {
    required: 'Name is required!',
    minLength: { value: 3, message: 'Name must be more than 3' },
    maxLength: { value: 30, message: 'Name must be less than 30' },
    pattern: {
      value: /^[a-zA-Z0-9 ]+$/,
      message: "Such symbol isn't allowed!",
    },
  },
};
