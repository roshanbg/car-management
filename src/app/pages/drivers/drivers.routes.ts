import { Routes } from '@angular/router';
import { DriversListComponent } from './drivers-list/drivers-list.component';
import { DriversEditorComponent } from './drivers-editor/drivers-editor.component';
import { PageMode } from '../../model/enums.model';

export const DRIVERS_ROUTES: Routes = [
  {
    path: 'drivers',
    children: [
      {
        path: '',
        component: DriversListComponent,
      },
      {
        path: 'new',
        component: DriversEditorComponent,
        data: {
          pageMode: PageMode.creat,
        },
      },
      {
        path: 'edit/:id',
        component: DriversEditorComponent,
        data: {
          pageMode: PageMode.edit,
        },
      },
      {
        path: ':id',
        component: DriversEditorComponent,
        data: {
          pageMode: PageMode.view,
        },
      },
    ],
  },
];
