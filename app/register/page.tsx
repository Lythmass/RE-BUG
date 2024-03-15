import { AuthChoice, AuthTitle } from 'components';
import Link from 'next/link';

export default function Register() {
  return (
    <div className='w-full h-full flex flex-col items-center p-10 gap-10'>
      <AuthTitle text='Register to' text_opt='as:' />
      <div className='w-full flex justify-center gap-5 items-center'>
        <Link
          className='w-1/2 font-medium text-center border-4 flex items-center justify-center hover:bg-accent-2 hover:text-dark transition-all bg-transparent border-accent-2 text-accent-2 text-4xl rounded-lg h-[10rem]'
          href={'/register/as_admin'}
        >
          Admin
        </Link>
        <Link
          className='w-1/2 font-medium text-center border-4 flex items-center justify-center hover:bg-accent-2 hover:text-dark transition-all bg-transparent border-accent-2 text-accent-2 text-4xl rounded-lg h-[10rem]'
          href={'/register/as_employee'}
        >
          Employee
        </Link>
      </div>
      <AuthChoice before='Already have an account?' middle='Log in' href='/' />
    </div>
  );
}
