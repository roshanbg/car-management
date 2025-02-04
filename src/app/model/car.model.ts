export interface Car {
  id: number;
  code: string;
  company: string;
  model: string;
  color: string;

  maintenanceHistory: MaintenanceRecord[];
}

export interface MaintenanceRecord {
  id: number;
  dsc: string | null;
  date: string | null;
}
