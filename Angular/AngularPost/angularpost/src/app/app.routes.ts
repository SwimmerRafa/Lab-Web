import { RouterModule, Routes } from '@angular/router';
//Se tienen que importar todas las rutas que vamos a utilizar
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { AltaalumnoComponent } from './componentes/altaalumno/altaalumno.component';
const APP_ROUTES: Routes = [
  //Se inicializan todas las rutas que vamos a utilizar.
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'altaalumnos', component: AltaalumnoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];
//Se tiene que importar APP_ROUTING en el archivo app.module.ts como un import,
//y dentro del arreglo de imports[]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
