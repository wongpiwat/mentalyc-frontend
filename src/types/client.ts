export interface Client {
  id: string;
  clientName: string;
  clinicianName: string;
  clientType: string;
  treatmentPlan: string;
  lastSession: string;
  unsavedNotes: string;
  status: boolean;
}
