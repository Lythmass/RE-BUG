import { raleway } from 'fonts';
import { ModalInputType } from './ModalInputType';
import { projectValidation } from 'config';

export const ModalInput: React.FC<ModalInputType> = (props) => {
  return (
    <div className='w-full mt-2'>
      <input
        {...props.register(props.name, projectValidation)}
        type='text'
        autoComplete='off'
        placeholder={props.placeholder}
        className={`${raleway.className} focus:outline-none border border-dark bg-transparent font-medium px-3 py-2 rounded-full w-full text-lg`}
      />
      <p
        className={`text-accent-1 font-medium text-sm leading-4 lg:h-2 ${raleway.className} px-7`}
      >
        {props.errors[props.name]?.message}
      </p>
    </div>
  );
};

export default ModalInput;
