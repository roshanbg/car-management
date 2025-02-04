import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ToolsComponent } from '../../separateComponent/tools/tools.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircle, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { CarsService } from '../../../service/car.service';
@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [ToolsComponent, FontAwesomeModule, RouterLink],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss',
})
export class CarsListComponent {
  private router = inject(Router);
  carsService = inject(CarsService);
  faSquarePlus = faSquarePlus;
  faCircle = faCircle;

  takeAction(event: { id: number; type: string }): void {
    switch (event.type) {
      case 'edit':
        this.router.navigateByUrl(`/cars/edit/${event.id}`);
        break;

      case 'view':
        this.router.navigateByUrl(`/cars/${event.id}`);
        break;
      case 'delete':
        this.deletItem(event.id);
    }
  }

  private deletItem(id: number) {
    this.carsService.cars = this.carsService.cars.filter((e) => e.id !== id);
  }
}
