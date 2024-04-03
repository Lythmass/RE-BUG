'use client';
import Link from 'next/link';
import { HeaderLayoutType } from './HeaderLayoutType';
import { usePathname } from 'next/navigation';

export const HeaderLayout: React.FC<HeaderLayoutType> = (props) => {
  const pathname = usePathname();
  return (
    <div className='w-full flex justify-between items-center border-b border-dark'>
      <h1 className='text-xl font-bold w-full text-start'>{props.title}</h1>
      <Link
        href={pathname + props.href}
        className='text-4xl cursor-pointer hover:scale-110 transition-all leading-none'
      >
        +
      </Link>
    </div>
  );
};

export default HeaderLayout;
