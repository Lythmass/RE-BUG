import { ProjectType } from 'types';

export const ProjectOption: React.FC<ProjectType> = (props) => {
  return (
    <div className='w-full flex gap-1'>
      <h1>{props.id}.</h1>
      <h1>{props.project}</h1>
    </div>
  );
};

export default ProjectOption;