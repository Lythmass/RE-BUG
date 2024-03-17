'use client';
import { registerAction } from 'actions';
import { AuthChoice, AuthRegisterForm, AuthTitle } from 'components';
import { fillFormData } from 'helpers';
import { useForm } from 'react-hook-form';
import { AuthTypes } from 'types';

export default function RegisterAdmin() {
  const methods = useForm<AuthTypes>({ mode: 'all' });
  const handleSubmit = async (data: AuthTypes) => {
    const formData = fillFormData(data);
    console.log(data.company_name);
    formData.append('role_id', '1');
    const response = await registerAction(formData);
    console.log(response);
  };
  return (
    <div className='w-full h-full flex flex-col items-center p-10 gap-10'>
      <AuthTitle text='register as admin to' />
      <form
        onSubmit={methods.handleSubmit(handleSubmit)}
        className='w-full flex flex-col gap-5'
      >
        <AuthRegisterForm methods={methods} />
      </form>
      <AuthChoice before='Already have and account?' middle='Log in' href='/' />
    </div>
  );
}
