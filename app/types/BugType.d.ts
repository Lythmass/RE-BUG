export type BugType = {
  id: number;
  name: string;
  severity: string;
  status: string;
  reporter: {
    first_name: string;
    last_name: string;
    username: string;
  };
  created_at: string;
};
