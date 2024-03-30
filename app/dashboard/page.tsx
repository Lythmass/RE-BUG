import { FetchAuthDataActions } from 'actions';
import { ContainerLayout } from 'components';

export default async function Dashboard() {
  const response = await FetchAuthDataActions('/users/user');
  return (
    <ContainerLayout width='75%'>
      {response?.logged_in_as.first_name}
    </ContainerLayout>
  );
}
