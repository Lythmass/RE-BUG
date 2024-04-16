import { FetchAuthDataActions } from 'actions';
import { Bug, BugTitles, ContainerLayout, HeaderLayout } from 'components';
import { bugTitlesConfig } from 'config';
import { BugType } from 'types';

export default async function ProjectId({
  params,
}: {
  params: { id: number };
}) {
  const bugs = await FetchAuthDataActions(`/bugs/get/${params.id}`);
  return (
    <ContainerLayout width='75%'>
      <HeaderLayout href='?modal=add_bug' title='Bugs' icon='+' />
      <div className='w-full flex flex-col gap-3 h-full'>
        <div className='grid pl-2  w-full grid-cols-7 content-start gap-3'>
          {bugTitlesConfig.map((bug, index) => {
            return <BugTitles key={index} title={bug.title} />;
          })}
        </div>
        <div className='w-full pb-5 mb-6 flex flex-col h-full gap-3 items-start justify-start overflow-y-auto'>
          {bugs?.data.map((bug: BugType, index: number) => {
            return (
              <Bug
                key={index}
                id={bug.id}
                index={index}
                name={bug.name}
                color={bug.color}
                severity={bug.severity}
                status={bug.status}
                reporter={bug.reporter}
                resolver={bug.resolver}
                created_at={bug.created_at}
                project_id={params.id}
              />
            );
          })}
        </div>
      </div>
    </ContainerLayout>
  );
}
