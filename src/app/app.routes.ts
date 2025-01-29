import { Routes } from '@angular/router';
import { TareasComponent } from './componentes/tareas/tareas.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  { path: 'componentes/tareas', component: TareasComponent },

  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
];
