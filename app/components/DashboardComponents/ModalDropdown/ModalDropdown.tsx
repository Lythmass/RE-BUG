import { bugValidation } from 'config';
import { raleway } from 'fonts';
import { ModalDropdownType } from './ModalDropdownType';

export const ModalDropdown: React.FC<ModalDropdownType> = (props) => {
  return (
    <div className='min-w-[20rem] h-full'>
      <select
        {...props.methods.register(props.name, bugValidation[props.name])}
        defaultValue={props.initialValue}
        className='w-full px-3 py-2 focus:outline-none bg-transparent border border-dark rounded-full'
      >
        <option
          className={`bg-light ${raleway.className} font-bold`}
          disabled
          value={0}
        >
          {props.title}
        </option>
        {props.title === 'Severity' &&
          props.items.map((item: any, index: number) => {
            return (
              <option
                style={{
                  color: item.color,
                }}
                className={`bg-light ${raleway.className} font-bold`}
                key={index}
                value={item.severity_id}
              >
                {item.severity}
              </option>
            );
          })}
        {props.title === 'Status' &&
          props.items.map((item: any, index: number) => {
            return (
              <option
                style={{
                  color: item.color,
                }}
                className={`bg-light ${raleway.className} font-bold`}
                key={index}
                value={item.status_id}
              >
                {item.status}
              </option>
            );
          })}
      </select>
      <p
        className={`text-accent-1 font-medium text-sm leading-4 lg:h-2 ${raleway.className} px-7`}
      >
        {props.methods.formState.errors[props.name]?.message}
      </p>
    </div>
  );
};

export default ModalDropdown;
