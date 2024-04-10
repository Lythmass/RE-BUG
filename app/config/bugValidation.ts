export const bugValidation = {
  name: {
    required: 'Name is required!',
    minLength: { value: 3, message: 'Name must be more than 3' },
    maxLength: { value: 30, message: 'Name must be less than 30' },
    pattern: {
      value: /^[a-zA-Z0-9 ]+$/,
      message: "Such symbol isn't allowed!",
    },
  },
  description: {
    required: 'Description is required!',
    minLength: { value: 100, message: 'Description must be more than 100' },
    maxLength: { value: 1000, message: 'Description must be less than 1000' },
  },
  solution: {
    required: 'Solution is required!',
    minLength: { value: 100, message: 'Solution must be more than 100' },
    maxLength: { value: 1000, message: 'Solution must be less than 1000' },
  },
  severity_id: {
    required: 'Severity is required!',
    pattern: {
      value: /^[1-5]+$/,
      message: 'Severity is required!',
    },
  },
  status_id: {
    required: 'Status is required!',
    pattern: {
      value: /^[1-5]+$/,
      message: 'Status is required!',
    },
  },
};
