import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import {ConsolasService} from '../../servicios/consolas.service';

@Component({
  selector: 'app-altaconsola',
  templateUrl: './altaconsola.component.html',
  styleUrls: ['./altaconsola.component.css']
})
export class AltaconsolaComponent implements OnInit {
  formulario: FormGroup;

  constructor(public consolaService : ConsolasService) {
    this.formulario = new FormGroup({
      "_id": new FormControl(""),
      "nombre": new FormControl(""),
      "imagen": new FormControl(""),
      "fichatecnica": new FormControl(""),

      "juegos": new FormArray([
        new FormGroup({
          "idJ" : new FormControl("")
        }),
        new FormGroup({
          "idJ" : new FormControl("")
        }),
        new FormGroup({
          "idJ" : new FormControl("")
        }),
      ])
    })
  }

  get juegos(): FormArray {
    return this.formulario.get('juegos') as FormArray;
  }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.formulario.value);
    new Promise( (resolve, reject) => {
      this.consolaService.agregarConsola(this.formulario.value).subscribe(
        consolas => {
          resolve()
        }
      )
    })
  }
}
