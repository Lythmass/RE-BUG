import { AuthInput, AuthTitle } from 'components';

export default function Home() {
  return (
    <form className='w-full h-full flex flex-col items-center p-10 gap-10'>
      <AuthTitle text='Login to' />
      <div className='w-full flex flex-col gap-5'>
        <AuthInput type='text' name='username' placeholder='Enter Username' />
        <AuthInput
          type='password'
          name='password'
          placeholder='Enter Password'
        />
      </div>
    </form>
  );
}
