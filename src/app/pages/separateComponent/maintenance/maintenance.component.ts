import {
  Component,
  EventEmitter,
  Input,
  input,
  output,
  Output,
} from '@angular/core';
import { MaintenanceRecord } from '../../../model/car.model';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss',
})
export class MaintenanceComponent {
  repairLogs = input.required<MaintenanceRecord[]>();
  isEditor = input();

  maintenanceListChanged = output<MaintenanceRecord[]>();

  inputChanged(event: any, item: MaintenanceRecord, key: 'date' | 'dsc'): void {
    item[key] = event.target.value;
    this.maintenanceListChanged.emit(this.repairLogs());
  }

  deleteMaintenance(id: number): void {
    const array = this.repairLogs().filter((e) => e.id !== id);
    this.maintenanceListChanged.emit(array);
  }

  addMaintenance(): void {
    this.repairLogs().push({
      id: Math.floor(Math.random() * 228),
      dsc: '',
      date: '',
    });

    this.maintenanceListChanged.emit(this.repairLogs());
  }
}
