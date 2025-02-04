import { Injectable } from '@angular/core';
import { Car } from '../model/car.model';

@Injectable({ providedIn: 'root' })
export class CarsService {
  cars: Car[] = [
    {
      id: 1,
      code: '80815',
      company: 'Toyta',
      model: 'Rav4',
      color: '#ffffff',
      maintenanceHistory: [],
    },
    {
      id: 2,
      code: '22722',
      company: 'Kia',
      model: 'Forty',
      color: '#000000',
      maintenanceHistory: [],
    },

    {
      id: 3,
      code: '12345',
      company: 'Kia',
      model: 'satafy',
      color: '#000023',
      maintenanceHistory: [],
    },
    {
      id: 4,
      code: '6789',
      company: 'Kia',
      model: 'ceratoo',
      color: '#00123',
      maintenanceHistory: [],
    },
    {
      id: 5,
      code: '45678',
      company: 'Kia',
      model: 'avanti',
      color: '#35679',
      maintenanceHistory: [],
    },
    {
      id: 6,
      code: '09846',
      company: 'Pmw',
      model: 'X5',
      color: '#04560',
      maintenanceHistory: [],
    },
    {
      id: 7,
      code: '08652',
      company: 'Toyta',
      model: 'yars',
      color: '#567680',
      maintenanceHistory: [],
    },
    {
      id: 8,
      code: '09821',
      company: 'Toyta',
      model: 'camri',
      color: '#20000',
      maintenanceHistory: [],
    },
    {
      id: 9,
      code: '1980',
      company: 'Aowdi',
      model: 'Qx5',
      color: '#3579',
      maintenanceHistory: [],
    },
    {
      id: 10,
      code: '2000',
      company: 'Poursh',
      model: 'caian',
      color: '#000000',
      maintenanceHistory: [],
    },
  ];
}
