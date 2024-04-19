'use client';
import { deleteBugAction, revalidateData } from 'actions';
import { Modal } from 'components';

import { usePostDashboard } from 'hooks';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const DeleteBug = () => {
  const { searchParams, params, router, pathname } = usePostDashboard();
  const [error, setError] = useState('');
  const methods = useForm();
  const handleSubmit = async () => {
    try {
      await deleteBugAction(params.bug_id);
      revalidateData(`/bugs/get/${params.id}`);
      revalidateData(`/projects/get/${params.id}`);
      router.push(`/dashboard/${params.id}`);
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <>
      {searchParams.get('modal') == 'delete_bug' && (
        <Modal
          handleClose={() => router.push(pathname)}
          title='Bug Destruction'
          methods={methods}
          handleSubmit={handleSubmit}
        >
          <p className='text-accent-1'>
            Are you sure you want to delete this bug?
          </p>
          <p className='text-accent-1 font-bold'>{error}</p>
        </Modal>
      )}
    </>
  );
};

export default DeleteBug;
