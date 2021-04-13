import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

//No es un @Component si no un @Injectable
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

  getAlumnosPalabraClave(palabraClave:string){
    //Utilizamos template literals
    let servicioRest = `http://localhost:8585/students/busqueda/${palabraClave}`;
    return this.httpClient.get(servicioRest);
  }

  addAlumno(alumno : any){
    let servicioRest = 'http://localhost:8585/students'
    return this.httpClient.post(servicioRest, alumno, {responseType: 'text'});
  }

}
