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
      <HeaderLayout href='/dashboard/?modal=add_bug' title='Bugs' />
      <div className='grid grid-cols-6 mt-3 h-full content-start gap-3 overflow-y-auto'>
        {bugTitlesConfig.map((bug, index) => {
          return <BugTitles key={index} title={bug.title} />;
        })}
        {bugs?.data.map((bug: BugType, index: number) => {
          return (
            <Bug
              key={index}
              id={bug.id}
              name={bug.name}
              severity={bug.severity}
              status={bug.status}
              reporter={bug.reporter}
              created_at={bug.created_at}
            />
          );
        })}
      </div>
    </ContainerLayout>
  );
}
