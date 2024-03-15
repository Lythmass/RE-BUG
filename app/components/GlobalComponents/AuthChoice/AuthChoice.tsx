import { raleway } from 'fonts';
import Link from 'next/link';
import { AuthChoiceType } from './AuthChoiceType';

export const AuthChoice: React.FC<AuthChoiceType> = (props) => {
  return (
    <h1 className={`text-light text-sm ${raleway.className}`}>
      {props.before}{' '}
      <Link href={props.href} className='text-accent-2 font-bold'>
        {props.middle}{' '}
      </Link>
      instead.
    </h1>
  );
};

export default AuthChoice;
