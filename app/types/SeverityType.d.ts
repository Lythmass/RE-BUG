export type SeverityType = {
  severities: {
    severity_id: number;
    color: string;
    description: string;
    severity: 'Cosmetic' | 'Low' | 'Medium' | 'High' | 'Critical';
  }[];
};
