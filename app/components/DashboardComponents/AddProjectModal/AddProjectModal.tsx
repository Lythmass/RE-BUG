'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { ModalInput } from '..';
import { useForm } from 'react-hook-form';
import { fillFormData } from 'helpers';
import { useRouter } from 'next/navigation';
import { projectException } from 'exceptions';

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
        <>
          <div
            onClick={handleClose}
            className='w-full cursor-default h-full absolute backdrop-blur-lg backdrop-brightness-50 top-0 left-0 z-[100]'
          />
          <form
            onSubmit={methods.handleSubmit(handleSubmit)}
            className='absolute flex flex-col items-center gap-5 px-10 py-5 z-[200] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-light shadow-[0px_25px_50px_-12px_rgb(0_0_0_/_0.5)] rounded-xl'
          >
            <h1 className='text-3xl font-bold'>Add New Project</h1>
            <ModalInput
              name='project'
              placeholder='Project Name'
              register={methods.register}
              errors={methods.formState.errors}
            />
            <button
              className='w-full self-start bg-transparent py-1 border-b border-dark text-dark hover:bg-dark hover:text-light transition-all'
              type='submit'
            >
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default AddProjectModal;
