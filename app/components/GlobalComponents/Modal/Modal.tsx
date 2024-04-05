import { ModalType } from './ModalType';

export const Modal: React.FC<ModalType> = (props) => {
  return (
    <>
      <div
        onClick={props.handleClose}
        className='w-full cursor-default h-full absolute backdrop-blur-lg backdrop-brightness-50 top-0 left-0 z-[100]'
      />
      <form
        onSubmit={props.methods.handleSubmit(props.handleSubmit)}
        className='absolute h-[30rem] flex flex-col items-center gap-5 px-10 py-5 z-[200] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-light shadow-[0px_25px_50px_-12px_rgb(0_0_0_/_0.5)] rounded-xl'
      >
        <h1 className='text-3xl font-bold'>{props.title}</h1>
        {props.children}
        <button
          className='w-full self-start bg-transparent py-1 border-b border-dark text-dark hover:bg-dark hover:text-light transition-all'
          type='submit'
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Modal;
