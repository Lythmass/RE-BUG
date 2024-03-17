import { AuthButton, AuthInput, AuthRepeatPassword } from 'components';
import { AuthRegisterFormType } from './AuthRegisterFormType';

export const AuthRegisterForm: React.FC<AuthRegisterFormType> = (props) => {
  return (
    <>
      <div className='flex gap-5'>
        <AuthInput
          type='text'
          name='first_name'
          placeholder='First Name'
          register={props.methods.register}
          errors={props.methods.formState.errors}
        />
        <AuthInput
          type='text'
          name='last_name'
          placeholder='Last Name'
          register={props.methods.register}
          errors={props.methods.formState.errors}
        />
      </div>
      <AuthInput
        type='email'
        name='email'
        placeholder='Email'
        register={props.methods.register}
        errors={props.methods.formState.errors}
      />

      <div className='flex gap-5'>
        <AuthInput
          type='text'
          name='username'
          placeholder='Username'
          register={props.methods.register}
          errors={props.methods.formState.errors}
        />
        <AuthInput
          type='text'
          name='company_name'
          placeholder='Company Name'
          register={props.methods.register}
          errors={props.methods.formState.errors}
        />
      </div>
      <div className='flex gap-5'>
        <AuthInput
          type='password'
          name='password'
          placeholder='Password'
          register={props.methods.register}
          errors={props.methods.formState.errors}
        />
        <AuthRepeatPassword
          register={props.methods.register}
          errors={props.methods.formState.errors}
          control={props.methods.control}
        />
      </div>
      <AuthButton text='Sign Up' />
    </>
  );
};

export default AuthRegisterForm;
