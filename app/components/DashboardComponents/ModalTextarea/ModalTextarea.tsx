import { bugValidation } from 'config';
import { raleway } from 'fonts';
import { ModalTextareaType } from './ModalTextareaType';

export const ModalTextarea: React.FC<ModalTextareaType> = (props) => {
  return (
    <div className='w-full h-full'>
      <textarea
        rows={4}
        {...(props.initialValue && { defaultValue: props.initialValue })}
        className={`${raleway.className} rounded-xl h-full focus:outline-none border border-dark bg-transparent font-medium px-3 py-2 w-full text-lg`}
        placeholder='Bug Description'
        {...props.methods.register(props.name, bugValidation[props.name])}
      />
      <p
        className={`text-accent-1 font-medium text-sm leading-4 lg:h-2 ${raleway.className} px-7`}
      >
        {props.methods.formState.errors[props.name]?.message}
      </p>
    </div>
  );
};

export default ModalTextarea;
