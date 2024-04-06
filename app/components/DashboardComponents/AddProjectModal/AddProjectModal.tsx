'use client';

import { Modal, ModalInput } from 'components';
import { useForm } from 'react-hook-form';
import { fillFormData, handleClose, resetFormData } from 'helpers';
import { dashboardException } from 'exceptions';
import { projectValidation } from 'config';
import { createProjectAction } from 'actions';
import { usePostDashboard } from 'hooks';

export const AddProjectModal = () => {
  const methods = useForm({ mode: 'all' });
  const { searchParams, router, pathname } = usePostDashboard();
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
  return (
    <>
      {searchParams.get('modal') == 'add_project' && (
        <Modal
          handleClose={() => handleClose(pathname, router, methods)}
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
