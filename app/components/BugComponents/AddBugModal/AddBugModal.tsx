'use client';
import { Modal, ModalInput } from 'components';
import { raleway } from 'fonts';
import { fillFormData } from 'helpers';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { SeverityType } from 'types/SeverityType';

export const AddBugModal: React.FC<SeverityType> = (props) => {
  const searchParams = useSearchParams();
  const methods = useForm({ mode: 'all' });
  const router = useRouter();
  const pathname = usePathname();
  const handleSubmit = (data: any) => {
    const formData = fillFormData(data);
    methods.resetField('name');
    console.log(formData);
  };
  const handleClose = () => {
    router.push(pathname);
    methods.resetField('name');
  };

  return (
    <>
      {searchParams.get('modal') == 'add_bug' && (
        <Modal
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          methods={methods}
          title='Add New Bug'
        >
          <ModalInput
            name='name'
            placeholder='Bug Name'
            errors={methods.formState.errors}
            register={methods.register}
          />
          <textarea
            className={`${raleway.className} focus:outline-none border border-dark bg-transparent font-medium px-3 py-2 h-full rounded-xl w-[20rem] text-lg`}
            placeholder='Bug Description'
            {...methods.register('description')}
          />
          <select
            defaultValue={'Choose One'}
            className='w-full px-3 py-2 focus:outline-none bg-transparent border border-dark rounded-full'
          >
            <option
              className={`bg-light ${raleway.className} font-bold`}
              disabled
            >
              Choose One
            </option>
            {props.severities.map((severity, index) => {
              return (
                <option
                  style={{
                    color: severity.color,
                  }}
                  className={`bg-light ${raleway.className} font-bold`}
                  key={index}
                >
                  {severity.severity}
                </option>
              );
            })}
          </select>
        </Modal>
      )}
    </>
  );
};

export default AddBugModal;
