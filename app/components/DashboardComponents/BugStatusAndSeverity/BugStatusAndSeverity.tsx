import { BugStatusAndSeverityType } from './BugStatusAndSeverityType';

export const BugStatusAndSeverity: React.FC<BugStatusAndSeverityType> = (
  props,
) => {
  return (
    <h1
      style={{ backgroundColor: props.color }}
      className={`px-2 flex text-light items-center rounded-full`}
    >
      {props.title}
    </h1>
  );
};

export default BugStatusAndSeverity;
