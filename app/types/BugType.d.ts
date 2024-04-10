export type BugType = {
  id: number;
  index: number;
  name: string;
  description?: string;
  solution?: string;
  severity: {
    severity_id: number;
    severity: string;
    color: string;
  };
  status: { status_id: number; status: string; color: string };
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
