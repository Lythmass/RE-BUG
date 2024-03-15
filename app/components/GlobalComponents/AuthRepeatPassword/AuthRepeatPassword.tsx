'use client';
import { raleway } from 'fonts';
import { AuthRepeatPasswordType } from './AuthRepeatPasswordType';
import { useWatch } from 'react-hook-form';

export const AuthRepeatPassword: React.FC<AuthRepeatPasswordType> = (props) => {
  const watchPassword = useWatch({
    name: 'password',
    control: props.control,
  });
  const validatePasswordConfirmation = {
    validate: (value: string) =>
      value === watchPassword || 'Passwords do not match',
  };
  return (
    <div className='w-full flex flex-col gap-1'>
      <input
        className={`${raleway.className} bg-transparent font-medium text-light w-full p-4 text-xl rounded-full focus:outline-none border focus:border-accent-1 transition-all`}
        type='password'
        placeholder='Repeat Password'
        autoComplete='off'
        {...props.register('confirm_password', validatePasswordConfirmation)}
      />
      <p
        className={`text-accent-1 text-sm leading-4 lg:h-2 ${raleway.className} px-7 break-words`}
      >
        {props.errors['confirm_password']?.message}
      </p>
    </div>
  );
};

export default AuthRepeatPassword;
