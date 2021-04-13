import { RouterModule, Routes } from '@angular/router';
// Se tienen que importar todas las rutas que vamos a utilizar
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ConsolaComponent } from './componentes/consola/consola.component';
import { InfoConsolaComponent} from './componentes/infoconsola/infoconsola.component';
import { Infoconsola2Component } from './componentes/infoconsola2/infoconsola2.component';
import { JuegosconsolaComponent} from './componentes/juegosconsola/juegosconsola.component';
import { Juegosconsola2Component} from './componentes/juegosconsola2/juegosconsola2.component';
import { InfojuegosComponent} from './componentes/infojuegos/infojuegos.component';
import { Infojuegos2Component} from './componentes/infojuegos2/infojuegos2.component';
import {Infojuegos3Component} from './componentes/infojuegos3/infojuegos3.component';
import {Infojuegos4Component} from './componentes/infojuegos4/infojuegos4.component';

const APP_ROUTES: Routes = [
  // Se inicializan todas las rutas que vamos a utilizar.
  { path: 'principal', component: PrincipalComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'consolas', component: ConsolaComponent },
  { path: 'consolas/infoconsola', component: InfoConsolaComponent},
  { path: 'consolas/infoconsola2', component: Infoconsola2Component},
  { path: 'consolas/infoconsola/juegosconsola', component: JuegosconsolaComponent},
  { path: 'consolas/infoconsola2/juegosconsola2', component: Juegosconsola2Component},
  { path: 'consolas/infoconsola/juegosconsola/juego1', component: InfojuegosComponent},
  { path: 'consolas/infoconsola/juegosconsola/juego2', component: Infojuegos2Component},
  { path: 'consolas/infoconsola2/juegosconsola2/juego3', component: Infojuegos3Component},
  { path: 'consolas/infoconsola2/juegosconsola2/juego4', component: Infojuegos4Component},
  { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];
// Se tiene que importar APP_ROUTING en el archivo app.module.ts como un import,
// y dentro del arreglo de imports[]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
