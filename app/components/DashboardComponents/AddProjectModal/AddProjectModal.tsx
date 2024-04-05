'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { Modal, ModalInput } from 'components';
import { useForm } from 'react-hook-form';
import { fillFormData } from 'helpers';
import { useRouter } from 'next/navigation';
import { projectException } from 'exceptions';
import { projectValidation } from 'config';

export const AddProjectModal = () => {
  const searchParams = useSearchParams();
  const methods = useForm({ mode: 'all' });
  const router = useRouter();
  const pathname = usePathname();
  const handleSubmit = (data: any) => {
    const formData = fillFormData(data);
    methods.resetField('project');
    projectException(formData, methods, router);
  };
  const handleClose = () => {
    router.push(pathname);
    methods.resetField('project');
  };
  return (
    <>
      {searchParams.get('modal') == 'add_project' && (
        <Modal
          handleClose={handleClose}
          methods={methods}
          handleSubmit={handleSubmit}
          title='Add New Project'
        >
          <ModalInput
            name='project'
            placeholder='Project Name'
            register={methods.register}
            errors={methods.formState.errors}
            validation={projectValidation}
          />
        </Modal>
      )}
    </>
  );
};

export default AddProjectModal;
