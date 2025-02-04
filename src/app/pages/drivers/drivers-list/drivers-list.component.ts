import { Component, inject } from '@angular/core';
import { ToolsComponent } from '../../separateComponent/tools/tools.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterLink } from '@angular/router';
import { DriversService } from '../../../service/drivers.service';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drivers-list',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, ToolsComponent],
  templateUrl: './drivers-list.component.html',
  styleUrl: './drivers-list.component.scss',
})
export class DriversListComponent {
  private router = inject(Router);
  driversService = inject(DriversService);

  faSquarePlus = faSquarePlus;

  takeAction(event: { id: number; type: string }): void {
    switch (event.type) {
      case 'edit':
        this.router.navigateByUrl(`/drivers/edit/${event.id}`);
        break;
      case 'view':
        this.router.navigateByUrl(`/drivers/${event.id}`);
        break;
      case 'delete':
        this.deletItem(event.id);
    }
  }

  deletItem(id: number): void {
    this.driversService.drivers = this.driversService.drivers.filter(
      (e) => e.id !== id
    );
  }
}
