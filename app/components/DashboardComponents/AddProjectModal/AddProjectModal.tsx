'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { Modal, ModalInput } from 'components';
import { useForm } from 'react-hook-form';
import { fillFormData, resetFormData } from 'helpers';
import { useRouter } from 'next/navigation';
import { dashboardException } from 'exceptions';
import { projectValidation } from 'config';
import { createProjectAction } from 'actions';

export const AddProjectModal = () => {
  const searchParams = useSearchParams();
  const methods = useForm({ mode: 'all' });
  const router = useRouter();
  const pathname = usePathname();
  const handleSubmit = (data: any) => {
    const formData = fillFormData(data);
    resetFormData(data, methods);
    dashboardException(
      'project',
      'projects',
      methods,
      createProjectAction,
      formData,
      router,
      '',
    );
  };
  const handleClose = () => {
    router.push(pathname);
    resetFormData(methods.getValues(), methods);
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
