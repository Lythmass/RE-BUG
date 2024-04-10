import { FetchAuthDataActions } from 'actions';
import { UpdateBugModal } from 'components';
import { BugType } from 'types';
export const UpdateBug: React.FC<{ bug: BugType }> = async (props) => {
  const severities = await FetchAuthDataActions('/severities/get');
  const statuses = await FetchAuthDataActions('/status/get');
  return (
    <>
      {severities && statuses && (
        <UpdateBugModal
          bug={props.bug}
          severities={severities?.data}
          statuses={statuses?.data}
        />
      )}
    </>
  );
};

export default UpdateBug;
