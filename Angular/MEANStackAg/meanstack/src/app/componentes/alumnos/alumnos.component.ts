import { Component, OnInit } from '@angular/core';
import { AlumnosService } from "../../servicios/alumnos.service";
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
//Vamos a utilizer el pipe async que solo puede recibir un Observable o un Promise
  alumnosAsincrono:any;
  constructor( public alumnosService : AlumnosService ) {
    this.alumnosAsincrono = new Promise( (resolve, reject) => {
      this.alumnosService.getAlumnos().subscribe(
        alumnos => {
          console.log(alumnos);
          resolve(alumnos);
        }
      );
    });
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  buscarAlumnos(palabraClave:string){
    if(palabraClave.length > 0){
      this.alumnosAsincrono = new Promise( (resolve, reject) => {
        this.alumnosService.getAlumnosPalabraClave(palabraClave).subscribe(
          alumnos => {
            console.log(alumnos);
            resolve(alumnos)
          }
        )
      })
    }
  }
}
