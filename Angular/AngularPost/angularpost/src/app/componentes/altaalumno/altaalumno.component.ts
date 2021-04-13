import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import {AlumnosService} from '../../servicios/alumnos.service';

@Component({
  selector: 'app-altaalumno',
  templateUrl: './altaalumno.component.html',
  styleUrls: ['./altaalumno.component.css']
})
export class AltaalumnoComponent implements OnInit {
  formulario:FormGroup;

  constructor(public alumnosService : AlumnosService) {
    this.formulario = new FormGroup({
      'campus': new FormControl(''),
      'nombre': new FormControl(''),
      'matricula': new FormControl(''),
      'materias': new FormArray([
        new FormGroup({
          '_id': new FormControl(''),
          'nombre': new FormControl('')
        }),
        new FormGroup({
          '_id': new FormControl(''),
          'nombre': new FormControl('')
        }),
        new FormGroup({
          '_id': new FormControl(''),
          'nombre': new FormControl('')
        })
      ]),
      'foto': new FormControl('')
    })
  }
  get materias(): FormArray {
    return this.formulario.get('materias') as FormArray;
  }
  ngOnInit() {

  }
  guardar(){
    console.log(this.formulario.value);
    new Promise( (resolve, reject) => {
      this.alumnosService.addAlumno(this.formulario.value).subscribe(
        alumnos => {
          resolve()
        })
    })
  }
}
