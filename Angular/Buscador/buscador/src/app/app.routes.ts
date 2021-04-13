import { RouterModule, Routes } from '@angular/router';

//Se tienen que importar todas las rutas que vamos a utilizar
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ConsolasComponent } from './componentes/consolas/consolas.component';
import { InfoconsolaComponent } from './componentes/infoconsola/infoconsola.component';
import { JuegosconsolaComponent } from './componentes/juegosconsola/juegosconsola.component';
import { JuegoComponent } from './componentes/juego/juego.component';
import { ResconsolasComponent } from './componentes/buscador/resconsolas/resconsolas.component';
import { ResjuegosComponent } from './componentes/buscador/resjuegos/resjuegos.component';
import {BlogComponent} from './componentes/blog/blog.component';
import {JuegobusquedaComponent} from './componentes/juegobusqueda/juegobusqueda.component';
import {AltaconsolaComponent} from './componentes/altaconsola/altaconsola.component';
import {AltajuegosComponent} from './componentes/altajuego/altajuegos.component';

const APP_ROUTES: Routes = [

  //Se inicializan todas las rutas que vamos a utilizar.
  { path: 'principal', component: PrincipalComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'consolas', component: ConsolasComponent },
  { path: 'blog', component: BlogComponent},
  //{ path: 'consolas/infoconsola/id', component: InfoconsolaComponent }, cambia por:
  { path: 'infoconsola/:id', component: InfoconsolaComponent },
  { path: 'juegosconsola/:id', component: JuegosconsolaComponent },
  { path: 'juego/:idC/:idJ', component: JuegoComponent },
  { path: 'juegosID/:idJ', component: JuegobusquedaComponent },
  { path: 'resconsolas/:palabrasBusqueda', component: ResconsolasComponent },
  { path: 'resjuegos/:palabrasBusqueda', component: ResjuegosComponent },

  { path: 'adminConsolas', component: AltaconsolaComponent },
  { path: 'adminJuegos', component: AltajuegosComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'principal' }

];

//Se tiene que importar APP_ROUTING en el archivo app.module.ts como un import,
//y dentro del arreglo de imports[]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
