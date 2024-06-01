'use client';
import { registerAction } from 'actions';
import { AuthChoice, AuthRegisterForm, AuthTitle } from 'components';
import { authException } from 'exceptions';
import { fillFormData } from 'helpers';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { AuthTypes } from 'types';

export default function RegisterAdmin({
  searchParams,
}: {
  searchParams: { role_id: number; role: string };
}) {
  const methods = useForm<AuthTypes>({ mode: 'all' });
  const router = useRouter();

  const handleSubmit = async (data: AuthTypes) => {
    const formData = fillFormData(data);
    formData.append('role_id', `${searchParams.role_id}`);
    authException({ router, methods, formData, action: registerAction });
  };
  return (
    <div className='w-full h-full flex flex-col items-center p-10 gap-10'>
      <AuthTitle text={`register as ${searchParams.role} on`} />
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
