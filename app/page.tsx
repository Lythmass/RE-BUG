'use client';
import { AuthButton, AuthInput, AuthTitle } from 'components';
import { useForm } from 'react-hook-form';

export default function Home() {
  const methods = useForm<{ username: string; password: string }>({
    mode: 'all',
  });
  const handleSubmit = (data: any) => {
    console.log(data);
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
          type='text'
          name='username'
          placeholder='Enter Username'
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
    </div>
  );
}
