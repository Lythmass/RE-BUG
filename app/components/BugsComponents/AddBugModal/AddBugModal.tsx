'use client';
import { Modal, ModalDropdown, ModalInput, ModalTextarea } from 'components';
import { bugValidation } from 'config';
import { fillFormData, handleClose, resetFormData } from 'helpers';
import { useForm } from 'react-hook-form';
import { SeverityType } from 'types/SeverityType';
import { BugFormType } from './BugFormType';
import { dashboardException } from 'exceptions';
import { createBugAction } from 'actions';
import { usePostDashboard } from 'hooks';

export const AddBugModal: React.FC<SeverityType> = (props) => {
  const methods = useForm<BugFormType>({
    mode: 'all',
  });

  const { searchParams, params, router, pathname } = usePostDashboard();
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
  return (
    <>
      {searchParams.get('modal') == 'add_bug' && (
        <Modal
          handleClose={() => handleClose(pathname, router, methods)}
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
          <ModalDropdown
            methods={methods}
            name='severity_id'
            items={props.severities}
            title='Severity'
            initialValue={0}
          />
          <ModalTextarea name='description' methods={methods} />
        </Modal>
      )}
    </>
  );
};

export default AddBugModal;
