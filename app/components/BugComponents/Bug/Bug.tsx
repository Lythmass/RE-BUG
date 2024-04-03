import { raleway } from 'fonts';
import { BugType } from 'types';

export const Bug: React.FC<BugType> = (props) => {
  return (
    <>
      <h1 className={`${raleway.className} font-medium`}>{props.id}.</h1>
      <h1 className={`${raleway.className} font-medium`}>{props.name}</h1>
      <h1 className={`${raleway.className} font-medium`}>{props.status}</h1>
      <h1 className={`${raleway.className} font-medium`}>{props.severity}</h1>
      <h1 className={`${raleway.className} font-medium`}>
        {props.reporter.username}
      </h1>
      <h1 className={`${raleway.className} font-medium`}>{props.created_at}</h1>
    </>
  );
};

export default Bug;
