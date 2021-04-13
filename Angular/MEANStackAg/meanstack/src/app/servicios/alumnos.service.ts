import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AlumnosService {
  constructor( public httpClient:HttpClient ) {
    console.log('Servicio de Alumnos Listo...');
  }
//Regresa un Observable
  getAlumnos(){
    let servicioRest = 'http://localhost:8585/students';
    return this.httpClient.get(servicioRest);
  }

  getAlumnosPalabraClave(palabraClave: string) {
    let servicioRest = `http://localhost:8585/students/busqueda/${palabraClave}`;
    return this.httpClient.get(servicioRest);
  }
}

