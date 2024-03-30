import { FetchAuthDataActions } from 'actions';
import { ContainerLayout, ProjectOption } from 'components';
import Link from 'next/link';
import { ProjectType } from 'types';

export const ProjectsDataContainer = async () => {
  const projects = await FetchAuthDataActions('/projects/get');
  return (
    <ContainerLayout width='25%'>
      <div className='w-full flex justify-between items-center border-b border-dark'>
        <h1 className='text-xl font-bold w-full text-start'>Projects</h1>
        <Link
          href='/dashboard/?modal=add_project'
          className='text-4xl cursor-pointer hover:scale-110 transition-all leading-none'
        >
          +
        </Link>
      </div>
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
