import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {ConsolasService} from '../../servicios/consolas.service';

@Component({
  selector: 'app-altajuegos',
  templateUrl: './altajuegos.component.html',
  styleUrls: ['./altajuegos.component.css']
})

export class AltajuegosComponent implements OnInit {
  formulario: FormGroup;
  constructor(public consolaService : ConsolasService) {
    this.formulario = new FormGroup({
      "_id": new FormControl(""),
      "nombre": new FormControl(""),
      "imagen": new FormControl(""),
      "developer": new FormControl(""),
      "lanzamiento": new FormControl(""),
      "carousel": new FormArray([
        new FormGroup({
          "img" : new FormControl("")
        }),
        new FormGroup({
          "img" : new FormControl("")
        }),
        new FormGroup({
          "img" : new FormControl("")
        }),
      ]),
      "ligas": new FormArray([
        new FormGroup({
          "link" : new FormControl("")
        }),
        new FormGroup({
          "link" : new FormControl("")
        }),
        new FormGroup({
          "link" : new FormControl("")
        }),
      ])
    })
  }

  get carousel(): FormArray {
    return this.formulario.get('carousel') as FormArray;
  }

  get webDatails(): FormArray {
    return this.formulario.get('ligas') as FormArray;
  }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.formulario.value);
    new Promise( (resolve, reject) => {
      this.consolaService.agregarJuego(this.formulario.value).subscribe(
        consolas => {
          resolve()
        }
      )
    })
  }
}
