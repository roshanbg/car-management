import { Routes } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsEditorComponent } from './cars-editor/cars-editor.component';
import { PageMode } from '../../model/enums.model';

export const CARS_ROUTES: Routes = [
  {
    path: 'cars',
    children: [
      {
        path: '',
        component: CarsListComponent,
      },
      {
        path: 'new',
        component: CarsEditorComponent,
        data: {
          pageMode: PageMode.creat,
        },
      },
      {
        path: 'edit/:id',
        component: CarsEditorComponent,
        data: {
          pageMode: PageMode.edit,
        },
      },
      {
        path: ':id',
        component: CarsEditorComponent,
        data: {
          pageMode: PageMode.view,
        },
      },
    ],
  },
];
