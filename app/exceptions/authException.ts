import { AuthExceptionType } from 'types';

export const authException = async (props: AuthExceptionType) => {
  try {
    const response: any = await props.action(props.formData);
    if (
      response.data.message == 'User Logged in successfully' &&
      response.status == 200
    ) {
      props.router.push('/dashboard');
    }
  } catch (error: any) {
    props.methods.setError('password', {
      message: error?.response.data.message,
    });
  }
};
