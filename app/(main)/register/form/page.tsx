'use client';
import { registerAction } from 'actions';
import { AuthChoice, AuthRegisterForm, AuthTitle } from 'components';
import { fillFormData } from 'helpers';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { AuthTypes } from 'types';

export default function RegisterAdmin() {
  const methods = useForm<AuthTypes>({ mode: 'all' });
  const searchParams = useSearchParams();
  const handleSubmit = async (data: AuthTypes) => {
    const formData = fillFormData(data);
    formData.append('role_id', `${searchParams.get('role_id')}`);
    try {
      await registerAction(formData);
    } catch (error: any) {
      methods.setError('password', { message: error?.response.data.message });
    }
  };
  return (
    <div className='w-full h-full flex flex-col items-center p-10 gap-10'>
      <AuthTitle text={`register as ${searchParams.get('role')} on`} />
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
