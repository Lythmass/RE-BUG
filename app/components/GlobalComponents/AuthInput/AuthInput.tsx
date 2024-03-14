import { raleway } from 'fonts';
import { AuthInputType } from 'types';

export const AuthInput: React.FC<AuthInputType> = (props) => {
  return (
    <input
      className={`${raleway.className} bg-transparent font-medium text-light w-full px-4 py-5 text-xl rounded-full focus:outline-none border-4 focus:border-accent-1 transition-all`}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      autoComplete='off'
    />
  );
};

export default AuthInput;
