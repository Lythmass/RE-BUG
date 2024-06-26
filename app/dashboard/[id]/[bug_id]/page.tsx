import { FetchAuthDataActions } from 'actions';
import {
  BugStatusAndSeverity,
  ContainerLayout,
  DateContainer,
  DeleteBug,
  DescriptionsContainer,
  HeaderLayout,
  UpdateBug,
} from 'components';
import Link from 'next/link';

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
  const isClosed = bug.data.status.status === 'Closed' ? true : false;

  return (
    <>
      <UpdateBug bug={bug.data} />
      <DeleteBug />
      <ContainerLayout width='75%'>
        <HeaderLayout
          title={`Bug: ${bug.data.name}`}
          href={`/dashboard/${params.id}`}
          icon={'<'}
        />
        <div className='flex gap-3 items-center mb-3'>
          <h1 style={{ color: bug.data.status.color }} className='font-medium'>
            Status:
          </h1>
          <BugStatusAndSeverity
            title={bug.data.status.status}
            color={bug.data.status.color}
            description={bug.data.status.description}
          />
          <h1
            style={{ color: bug.data.severity.color }}
            className='font-medium'
          >
            Severity:
          </h1>
          <BugStatusAndSeverity
            title={bug.data.severity.severity}
            color={bug.data.severity.color}
            description={bug.data.severity.description}
          />
          <div className='flex gap-3 ml-3'>
            <DateContainer date={`Found: ${created_at}`} />
            <DateContainer
              date={`${isClosed ? `Closed: ${updated_at}` : 'Closed: Not Closed'}`}
            />
          </div>
          <Link
            className={`text-accent-2 font-bold ml-3 bg-dark px-3 py-1 `}
            href='?modal=update_bug'
          >
            +Update
          </Link>
          <Link
            className={`text-accent-1 font-bold bg-dark px-3 py-1 `}
            href='?modal=delete_bug'
          >
            -Delete
          </Link>
        </div>
        <div className='flex flex-col gap-3 w-full'>
          <div className='w-full gap-4 flex'>
            <h1 className='font-bold'>
              Reported by:{' '}
              <span className='text-accent-1'>
                {bug.data.reporter.username}
              </span>
            </h1>
            <h1 className='font-bold'>
              Closed by:{' '}
              <span className='text-accent-2'>
                {bug.data.resolver.username}
              </span>
            </h1>
          </div>
          <DescriptionsContainer
            title='Description'
            description={bug.data.description}
          />
          <DescriptionsContainer
            title='Solution'
            description={bug.data.solution}
          />
        </div>
      </ContainerLayout>
    </>
  );
}
