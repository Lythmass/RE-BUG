export type ProjectAnalyticsType = {
  project: string;
  bugs_length: number;
  newest_bug: string | number | DateDate;
  oldest_bug: string | number | DateDate;
  statuses: {
    new: number;
    wip: number;
    resolved: number;
    reopened: number;
    closed: number;
  };
  severities: {
    cosmetic: number;
    low: number;
    medium: number;
    high: number;
    critical: number;
  };
};
