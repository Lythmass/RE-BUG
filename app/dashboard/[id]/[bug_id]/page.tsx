import { FetchAuthDataActions } from 'actions';
import {
  BugStatusAndSeverity,
  ContainerLayout,
  DateContainer,
  HeaderLayout,
} from 'components';

export default async function BugId({
  params,
}: {
  params: { id: number; bug_id: number };
}) {
  const bug = await FetchAuthDataActions(
    `/bugs/get/${params.id}/${params.bug_id}`,
  );
  const created_at = new Date(bug.data.created_at).toLocaleDateString();
  const updated_at = new Date(bug.data.updated_at).toLocaleDateString();
  const isClosed = bug.data.status === 'Closed' ? true : false;
  return (
    <ContainerLayout width='75%'>
      <HeaderLayout
        title={`Bug: ${bug.data.name}`}
        href={`/dashboard/${params.id}`}
        icon={'<'}
      />
      <div className='flex gap-3 items-center'>
        <h1 style={{ color: bug.data.status.color }} className='font-medium'>
          Status:
        </h1>
        <BugStatusAndSeverity
          title={bug.data.status.status}
          color={bug.data.status.color}
        />
        <h1
          style={{ color: bug.data.severity.color }}
          className='ml-3 font-medium'
        >
          Severity:
        </h1>
        <BugStatusAndSeverity
          title={bug.data.severity.severity}
          color={bug.data.severity.color}
        />
        <div className='flex gap-3 ml-3'>
          <DateContainer date={`Found: ${created_at}`} />
          <DateContainer
            date={`${isClosed ? `Closed: ${updated_at}` : 'Closed: Not Closed'}`}
          />
        </div>
      </div>
      {/* <h1>Bug ID: {params.bug_id}</h1>
      <p>ID: {params.id}</p>
      <h1>{bug.data.solution}</h1> */}
    </ContainerLayout>
  );
}
