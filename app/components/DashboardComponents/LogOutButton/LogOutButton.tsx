'use client';
import { logoutAction } from 'actions';
import { useRouter } from 'next/navigation';

export const LogOutButton = () => {
  const router = useRouter();
  const handleClick = async () => {
    try {
      const response = await logoutAction();
      if (response.status === 200) {
        router.push('/');
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <div
      onClick={handleClick}
      className='border-b hover:bg-accent-1 hover:text-light transition-all leading-none text-accent-1 font-bold border-b-accent-1 py-2 px-3 cursor-pointer'
    >
      Log Out
    </div>
  );
};

export default LogOutButton;
