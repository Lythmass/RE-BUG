import { BugStatusAndSeverity } from 'components';
import { raleway } from 'fonts';
import Link from 'next/link';
import { BugType } from 'types';

export const Bug: React.FC<BugType> = (props) => {
  const formattedDate = new Date(props.created_at).toLocaleDateString();

  return (
    <Link
      href={`/dashboard/${props.project_id}/${props.id}`}
      className={`grid cursor-default py-2 pl-2 hover:bg-dark hover:text-light w-full grid-cols-7 font-medium content-start gap-3 ${raleway.className} `}
    >
      <h1>{props.index + 1}.</h1>
      <h1>{props.name}</h1>
      <BugStatusAndSeverity
        title={props.status.status}
        color={props.status.color}
      />
      <BugStatusAndSeverity
        title={props.severity.severity}
        color={props.severity.color}
      />
      <h1 style={{ backgroundColor: props.color }}>
        {props.reporter.username}
      </h1>
      <h1>{props.resolver ? props.resolver.username : 'Not Resolved'}</h1>
      <h1>{formattedDate}</h1>
    </Link>
  );
};

export default Bug;
