export type SeverityType = {
  severities: {
    color: string;
    description: string;
    severity: 'Cosmetic' | 'Low' | 'Medium' | 'High' | 'Critical';
  }[];
};
