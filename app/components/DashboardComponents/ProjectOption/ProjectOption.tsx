import { raleway } from 'fonts';
import { ProjectType } from 'types';

export const ProjectOption: React.FC<ProjectType> = (props) => {
  return (
    <div
      className={`${raleway.className} font-medium w-full flex gap-1 hover:bg-dark hover:text-light cursor-default px-2 py-1`}
    >
      <h1>{props.id}.</h1>
      <h1>{props.project}</h1>
    </div>
  );
};

export default ProjectOption;
