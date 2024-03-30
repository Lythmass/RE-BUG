import { getUserDataAction } from 'actions';
import { ContainerLayout, LogOutButton } from 'components';

export const UserDataContainer = async () => {
  const response = await getUserDataAction();
  return (
    <ContainerLayout width='25%'>
      <div className='flex flex-col h-full gap-1 items-start justify-between'>
        <h1 className='text-xl 3xl:text-3xl font-bold'>
          Welcome, {response?.logged_in_as.username}
        </h1>
        <h1 className='3xl:text-lg'>
          Your name:{' '}
          <span className='font-bold'>
            {response?.logged_in_as.first_name}{' '}
            {response?.logged_in_as.last_name}
          </span>
        </h1>
        <h1 className='3xl:text-lg'>
          Your role:{' '}
          <span className='font-bold'>{response?.logged_in_as.role_name}</span>
        </h1>
        <LogOutButton />
      </div>
    </ContainerLayout>
  );
};

export default UserDataContainer;
