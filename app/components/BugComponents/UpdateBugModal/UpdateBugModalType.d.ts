import { BugType, SeverityType, StatusType } from 'types';

export type UpdateBugModalType = {
  bug: BugType;
  severities: SeverityType;
  statuses: StatusType;
};
