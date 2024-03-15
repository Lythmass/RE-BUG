'use client';
import { AuthButton, AuthChoice, AuthInput, AuthTitle } from 'components';
import { useForm } from 'react-hook-form';
import { loginAction } from 'actions';
import { AuthTypes } from 'types';

export default function Home() {
  const methods = useForm<AuthTypes>({
    mode: 'all',
  });
  const handleSubmit = async (data: AuthTypes) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    const response = await loginAction(formData);
    console.log(response);
  };
  return (
    <div className='w-full h-full flex flex-col items-center p-10 gap-10'>
      <AuthTitle text='login to' />
      <form
        onSubmit={methods.handleSubmit(handleSubmit)}
        className='w-full flex flex-col gap-5'
      >
        <AuthInput
          register={methods.register}
          type='email'
          name='email'
          placeholder='Enter Email'
          errors={methods.formState.errors}
        />
        <AuthInput
          register={methods.register}
          type='password'
          name='password'
          placeholder='Enter Password'
          errors={methods.formState.errors}
        />
        <AuthButton text='Login' />
      </form>
      <AuthChoice
        before="Don't have an account?"
        middle='Register in'
        href='/register'
      />
    </div>
  );
}
