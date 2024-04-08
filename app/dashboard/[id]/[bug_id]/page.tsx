import { FetchAuthDataActions } from 'actions';
import { ContainerLayout } from 'components';

export default async function BugId({
  params,
}: {
  params: { id: number; bug_id: number };
}) {
  const bug = await FetchAuthDataActions(
    `/bugs/get/${params.id}/${params.bug_id}`,
  );
  return (
    <ContainerLayout width='75%'>
      <h1>Bug ID: {params.bug_id}</h1>
      <p>ID: {params.id}</p>
      <h1>{bug.data.solution}</h1>
    </ContainerLayout>
  );
}
