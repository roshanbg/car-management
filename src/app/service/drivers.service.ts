import { Injectable } from '@angular/core';
import { Drivers } from '../model/drivers.model';

@Injectable({
  providedIn: 'root',
})
export class DriversService {
  drivers: Drivers[] = [
    {
      id: 1,
      name: 'roshan',
      lastName: 'Albeg',
    },
    {
      id: 2,
      name: 'mohamed',
      lastName: 'Kabbani',
    },
    {
      id: 3,
      name: 'sdra',
      lastName: 'Albeg',
    },
  ];
}
