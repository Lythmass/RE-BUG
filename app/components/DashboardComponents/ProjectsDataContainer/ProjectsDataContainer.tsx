import { FetchAuthDataActions } from 'actions';
import { ContainerLayout, HeaderLayout, ProjectOption } from 'components';
import { ProjectType } from 'types';

export const ProjectsDataContainer = async () => {
  const projects = await FetchAuthDataActions('/projects/get');
  return (
    <ContainerLayout width='25%'>
      <HeaderLayout href='?modal=add_project' title='Projects' icon='+' />
      <div className='w-full flex flex-col h-full overflow-y-auto'>
        {projects?.data.map((project: ProjectType, index: number) => {
          return (
            <ProjectOption
              key={index}
              id={index + 1}
              project={project.project}
              project_id={project.id}
            />
          );
        })}
      </div>
    </ContainerLayout>
  );
};

export default ProjectsDataContainer;
