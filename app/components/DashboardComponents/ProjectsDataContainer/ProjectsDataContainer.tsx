import { FetchAuthDataActions } from 'actions';
import { ContainerLayout, ProjectOption } from 'components';
import { ProjectType } from 'types';

export const ProjectsDataContainer = async () => {
  const projects = await FetchAuthDataActions('/projects/get');
  return (
    <ContainerLayout width='25%'>
      <h1 className='text-xl font-bold w-full text-start border-b border-dark'>
        Projects
      </h1>
      <div className='w-full flex flex-col mt-3'>
        {projects?.data.map((project: ProjectType) => {
          return (
            <ProjectOption
              key={project.id}
              id={project.id}
              project={project.project}
            />
          );
        })}
      </div>
    </ContainerLayout>
  );
};

export default ProjectsDataContainer;
