import { BugType } from './BugType';

export type ProjectType = {
  id: number;
  project: string;
  project_id: number;
  bugs?: BugType[];
};
