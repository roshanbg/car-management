import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CARS_ROUTES } from './pages/cars/cars.routes';
import { DRIVERS_ROUTES } from './pages/drivers/drivers.routes';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  ...CARS_ROUTES,
  ...DRIVERS_ROUTES,
];
