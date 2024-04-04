export type BugType = {
  id: number;
  name: string;
  severity: {
    severity: string;
    color: string;
  };
  status: { status: string; color: string };
  color: string;
  reporter: {
    first_name: string;
    last_name: string;
    username: string;
  };
  resolver:
    | {
        first_name: string;
        last_name: string;
        username: string;
      }
    | false;
  created_at: string;
  project_id: number;
};
