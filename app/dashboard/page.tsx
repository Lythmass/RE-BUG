import { getUserDataAction } from 'actions';
import { ContainerLayout } from 'components';

export default async function Dashboard() {
  const response = await getUserDataAction();
  return (
    <ContainerLayout width='75%'>
      {response?.logged_in_as.first_name}
    </ContainerLayout>
  );
}
