import { AuthChoice, AuthTitle } from 'components';
import Link from 'next/link';

async function getRolesData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/roles/get`, {
    cache: 'force-cache',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default async function Register() {
  const rolesData = await getRolesData();
  const renderRoleButtons = rolesData.data?.map(
    (role: { role_id: number; role: string }) => {
      return (
        <Link
          key={role.role_id}
          className='font-medium text-center border-4 flex items-center justify-center hover:bg-accent-2 hover:text-dark transition-all bg-transparent border-accent-2 text-accent-2 text-4xl rounded-lg h-[10rem]'
          href={`/register/form?role_id=${role.role_id}&role=${role.role}`}
        >
          {role.role}
        </Link>
      );
    },
  );
  return (
    <div className='w-full h-full flex flex-col items-center p-10 gap-10'>
      <AuthTitle text='Register to' text_opt='as:' />
      <div className='w-full grid grid-cols-[50%,_50%] gap-5 justify-center'>
        {renderRoleButtons}
      </div>
      <AuthChoice before='Already have an account?' middle='Log in' href='/' />
    </div>
  );
}
