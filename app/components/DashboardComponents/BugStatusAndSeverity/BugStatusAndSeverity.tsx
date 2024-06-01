import { BugStatusAndSeverityType } from './BugStatusAndSeverityType';

export const BugStatusAndSeverity: React.FC<BugStatusAndSeverityType> = (
  props,
) => {
  const before = `before:content-[attr(data-before)] before:hidden hover:before:block before:absolute before:left-1/2 before:-translate-x-1/2 before:top-10 before:bg-dark before:min-w-[14rem] before:py-4 before:px-3 before:rounded-xl before:z-[200] before:transition-all`;
  return (
    <h1
      data-before={props.description}
      style={{ backgroundColor: props.color }}
      className={`${before} px-2 flex text-light items-center rounded-full relative`}
    >
      {props.title}
    </h1>
  );
};

export default BugStatusAndSeverity;
