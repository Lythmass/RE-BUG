import { getUserDataAction } from 'actions';
import { ContainerLayout, LogOutButton } from 'components';

export const UserDataContainer = async () => {
  const response = await getUserDataAction();
  return (
    <ContainerLayout width='25%'>
      <div className='flex flex-col gap-1 items-start'>
        <h1 className='text-lg font-bold'>{response?.logged_in_as.username}</h1>
        <h1>
          {response?.logged_in_as.first_name} {response?.logged_in_as.last_name}
        </h1>
        <h1>
          role:{' '}
          <span className='font-bold'>{response?.logged_in_as.role_name}</span>
        </h1>
      </div>
      <LogOutButton />
    </ContainerLayout>
  );
};

export default UserDataContainer;
