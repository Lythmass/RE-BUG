import { validation } from 'config';
import { raleway } from 'fonts';
import { AuthInputType } from 'types';

export const AuthInput: React.FC<AuthInputType> = (props) => {
  return (
    <div className='w-full flex flex-col gap-1'>
      <input
        className={`${raleway.className} bg-transparent font-medium text-light w-full p-4 text-lg rounded-full focus:outline-none border focus:border-accent-1 transition-all`}
        type={props.type}
        placeholder={props.placeholder}
        autoComplete='off'
        {...props.register(props.name, validation[props.name])}
      />
      <p
        className={`text-accent-1 font-medium text-sm leading-4 lg:h-2 ${raleway.className} px-7`}
      >
        {props.errors[props.name]?.message}
      </p>
    </div>
  );
};

export default AuthInput;
