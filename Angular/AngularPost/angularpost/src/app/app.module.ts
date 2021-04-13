import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';

import { AlumnosService } from './servicios/alumnos.service';
import { HttpClientModule } from '@angular/common/http';
import { AltaalumnoComponent } from './componentes/altaalumno/altaalumno.component';
import { MenuComponent } from './componentes/menu/menu.component';

import {APP_ROUTING} from './app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    AltaalumnoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AlumnosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
