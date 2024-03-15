'use client';
import {
  AuthButton,
  AuthChoice,
  AuthInput,
  AuthRepeatPassword,
  AuthTitle,
} from 'components';
import { useForm } from 'react-hook-form';
import { AuthTypes } from 'types';

export default function RegisterAdmin() {
  const methods = useForm<AuthTypes>({ mode: 'all' });
  const handleSubmit = (data: AuthTypes) => {
    console.log(data);
  };
  return (
    <div className='w-full h-full flex flex-col items-center p-10 gap-10'>
      <AuthTitle text='register as admin to' />
      <form
        onSubmit={methods.handleSubmit(handleSubmit)}
        className='w-full flex flex-col gap-5'
      >
        <div className='flex gap-5'>
          <AuthInput
            type='text'
            name='first_name'
            placeholder='First Name'
            register={methods.register}
            errors={methods.formState.errors}
          />
          <AuthInput
            type='text'
            name='last_name'
            placeholder='Last Name'
            register={methods.register}
            errors={methods.formState.errors}
          />
        </div>
        <AuthInput
          type='email'
          name='email'
          placeholder='Email'
          register={methods.register}
          errors={methods.formState.errors}
        />

        <div className='flex gap-5'>
          <AuthInput
            type='text'
            name='username'
            placeholder='Username'
            register={methods.register}
            errors={methods.formState.errors}
          />
          <AuthInput
            type='text'
            name='company_name'
            placeholder='Company Name'
            register={methods.register}
            errors={methods.formState.errors}
          />
        </div>
        <div className='flex gap-5'>
          <AuthInput
            type='password'
            name='password'
            placeholder='Password'
            register={methods.register}
            errors={methods.formState.errors}
          />
          <AuthRepeatPassword
            register={methods.register}
            errors={methods.formState.errors}
            control={methods.control}
          />
        </div>
        <AuthButton text='Sign Up' />
      </form>
      <AuthChoice before='Already have and account?' middle='Log in' href='/' />
    </div>
  );
}
