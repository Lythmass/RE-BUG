import { raleway } from 'fonts';
import { DescriptionsContainerType } from './DescriptionsContainerType';

export const DescriptionsContainer: React.FC<DescriptionsContainerType> = (
  props,
) => {
  return (
    <div className='w-full flex flex-col gap-1 items-start'>
      <h1 className='font-bold text-3xl'>{props.title}</h1>
      <p className={`${raleway.className}  px-3 py-2 font-medium`}>
        {props.description}
      </p>
    </div>
  );
};

export default DescriptionsContainer;
