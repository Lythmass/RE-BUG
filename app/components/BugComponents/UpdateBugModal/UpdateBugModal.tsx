'use client';
import { Modal, ModalDropdown, ModalInput, ModalTextarea } from 'components';
import { fillFormData } from 'helpers';
import { usePostDashboard } from 'hooks';
import { useForm } from 'react-hook-form';
import { UpdateBugModalType } from './UpdateBugModalType';
import { bugValidation } from 'config';
import { dashboardException } from 'exceptions';
import { updateBugAction } from 'actions';

export const UpdateBugModal: React.FC<UpdateBugModalType> = (props) => {
  const methods = useForm({ mode: 'all' });
  const { searchParams, params, router, pathname } = usePostDashboard();
  const handleSubmit = (data: any) => {
    data['project_id'] = params.id;
    data['id'] = params.bug_id;
    const formData = fillFormData(data);
    dashboardException(
      'name',
      'bug',
      methods,
      updateBugAction,
      formData,
      router,
      params.id,
      params.bug_id,
    );
  };
  return (
    <>
      {searchParams.get('modal') == 'update_bug' && (
        <Modal
          handleClose={() => router.push(pathname)}
          handleSubmit={handleSubmit}
          methods={methods}
          title={`Update '${props.bug.name}' Bug`}
        >
          <div className='min-w-[40rem]'>
            <div className='w-full'>
              <h1 className='ml-5'>Name:</h1>
              <ModalInput
                name='name'
                placeholder='Bug Name'
                errors={methods.formState.errors}
                register={methods.register}
                validation={bugValidation}
                initialValue={props.bug.name}
              />
            </div>
            <div className='w-full flex gap-3 items-center'>
              <div className='w-full'>
                <h1 className='ml-5'>Status:</h1>
                <ModalDropdown
                  methods={methods}
                  name='status_id'
                  items={props.statuses}
                  title='Status'
                  initialValue={props.bug.status.status_id}
                />
              </div>
              <div className='w-full'>
                <h1 className='ml-5'>Severity:</h1>
                <ModalDropdown
                  methods={methods}
                  name='severity_id'
                  items={props.severities}
                  title='Severity'
                  initialValue={props.bug.severity.severity_id}
                />
              </div>
            </div>
            <div className='w-full'>
              <h1 className='ml-5'>Description:</h1>
              <ModalTextarea
                name='description'
                methods={methods}
                initialValue={props.bug.description}
              />
            </div>
            <div className='w-full'>
              <h1 className='ml-5'>Solution:</h1>
              <ModalTextarea
                name='solution'
                methods={methods}
                initialValue={props.bug.solution}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default UpdateBugModal;
