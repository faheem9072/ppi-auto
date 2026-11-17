export interface ChecklistItem {
  id: string;
  name: string;
  category: 'engine' | 'body' | 'electrical' | 'brakes' | 'roadtest' | 'interior';
  description: string;
  status: 'Pass' | 'Attention' | 'Fail';
  method: string;
  commonDefect?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  specs: string[];
  keyChecks: string[];
}

export interface InspectionReport {
  id: string;
  vehicle: string;
  vin: string;
  mileage: string;
  date: string;
  location: string;
  inspector: string;
  overallScore: number;
  verdict: 'Recommended with Minor Fixes' | 'Pass with Distinction' | 'High Risk - Negotiate or Walk';
  estimatedRepairSavings: string;
  summary: string;
}
