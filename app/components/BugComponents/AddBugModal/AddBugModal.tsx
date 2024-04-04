'use client';
import { Modal, ModalInput } from 'components';
import { raleway } from 'fonts';
import { fillFormData } from 'helpers';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export const AddBugModal = () => {
  const searchParams = useSearchParams();
  const methods = useForm({ mode: 'all' });
  const router = useRouter();
  const pathname = usePathname();
  const handleSubmit = (data: any) => {
    const formData = fillFormData(data);
    methods.resetField('project');
    console.log(formData);
  };
  const handleClose = () => {
    router.push(pathname);
    methods.resetField('project');
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
            className={`${raleway.className} focus:outline-none border border-dark bg-transparent font-medium px-3 py-2 rounded-xl w-[20rem] text-lg`}
            placeholder='Bug Description'
            {...methods.register('description')}
          />
        </Modal>
      )}
    </>
  );
};

export default AddBugModal;
