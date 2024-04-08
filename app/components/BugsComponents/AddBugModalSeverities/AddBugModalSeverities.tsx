import { FetchAuthDataActions } from 'actions';
import { AddBugModal } from 'components';

export const AddBugModalSeverities = async () => {
  const severities = await FetchAuthDataActions('/severities/get');
  return <>{severities && <AddBugModal severities={severities?.data} />}</>;
};

export default AddBugModalSeverities;
