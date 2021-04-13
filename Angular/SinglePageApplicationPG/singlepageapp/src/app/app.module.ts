import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/comunes/encabezado/encabezado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ConsolaComponent } from './componentes/consola/consola.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';

import {APP_ROUTING} from './app.routes';
import {InfoConsolaComponent} from './componentes/infoconsola/infoconsola.component';
import { JuegosconsolaComponent } from './componentes/juegosconsola/juegosconsola.component';
import { InfojuegosComponent } from './componentes/infojuegos/infojuegos.component';
import { Infoconsola2Component } from './componentes/infoconsola2/infoconsola2.component';
import { Juegosconsola2Component } from './componentes/juegosconsola2/juegosconsola2.component';
import { Infojuegos2Component } from './componentes/infojuegos2/infojuegos2.component';
import { Infojuegos3Component } from './componentes/infojuegos3/infojuegos3.component';
import { Infojuegos4Component } from './componentes/infojuegos4/infojuegos4.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PrincipalComponent,
    ConsolaComponent,
    AcercadeComponent,
    InfoConsolaComponent,
    JuegosconsolaComponent,
    InfojuegosComponent,
    Infoconsola2Component,
    Juegosconsola2Component,
    Infojuegos2Component,
    Infojuegos3Component,
    Infojuegos4Component
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
