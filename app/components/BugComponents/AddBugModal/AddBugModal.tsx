'use client';
import { Modal, ModalInput } from 'components';
import { bugValidation } from 'config';
import { raleway } from 'fonts';
import { fillFormData, resetFormData } from 'helpers';
import {
  usePathname,
  useSearchParams,
  useRouter,
  useParams,
} from 'next/navigation';
import { useForm } from 'react-hook-form';
import { SeverityType } from 'types/SeverityType';
import { BugFromType } from './BugFromType';
import { dashboardException } from 'exceptions';
import { createBugAction } from 'actions';

export const AddBugModal: React.FC<SeverityType> = (props) => {
  const searchParams = useSearchParams();
  const params = useParams();
  const methods = useForm<BugFromType>({
    mode: 'all',
  });
  const router = useRouter();
  const pathname = usePathname();
  const handleSubmit = (data: any) => {
    data['project_id'] = params.id;
    const formData = fillFormData(data);
    resetFormData(data, methods);
    dashboardException(
      'name',
      'bugs',
      methods,
      createBugAction,
      formData,
      router,
      params.id,
    );
  };
  const handleClose = () => {
    router.push(pathname);
    resetFormData(methods.getValues(), methods);
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
            validation={bugValidation}
          />
          <div className='w-full h-full'>
            <select
              {...methods.register('severity_id', bugValidation['severity_id'])}
              defaultValue={0}
              className='w-full px-3 py-2 focus:outline-none bg-transparent border border-dark rounded-full'
            >
              <option
                className={`bg-light ${raleway.className} font-bold`}
                disabled
                value={0}
              >
                Severity
              </option>
              {props.severities.map((severity, index) => {
                return (
                  <option
                    style={{
                      color: severity.color,
                    }}
                    className={`bg-light ${raleway.className} font-bold`}
                    key={index}
                    value={severity.severity_id}
                  >
                    {severity.severity}
                  </option>
                );
              })}
            </select>
            <p
              className={`text-accent-1 font-medium text-sm leading-4 lg:h-2 ${raleway.className} px-7`}
            >
              {methods.formState.errors['severity_id']?.message}
            </p>
          </div>
          <div className='w-full h-full'>
            <textarea
              className={`${raleway.className} rounded-xl h-full focus:outline-none border border-dark bg-transparent font-medium px-3 py-2 w-[20rem] text-lg`}
              placeholder='Bug Description'
              {...methods.register('description', bugValidation['description'])}
            />
            <p
              className={`text-accent-1 font-medium text-sm leading-4 lg:h-2 ${raleway.className} px-7`}
            >
              {methods.formState.errors['description']?.message}
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AddBugModal;
