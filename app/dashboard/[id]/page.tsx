import { FetchAuthDataActions } from 'actions';
import { ContainerLayout, HeaderLayout } from 'components';

export default async function ProjectId({
  params,
}: {
  params: { id: number };
}) {
  const bugs = await FetchAuthDataActions(`/bugs/get/${params.id}`);
  return (
    <ContainerLayout width='75%'>
      <HeaderLayout href='/dashboard/?modal=add_bug' title='Bugs' />
    </ContainerLayout>
  );
}
