import { Component, OnInit } from '@angular/core';
import {ConsolasService} from '../../../servicios/consolas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buscar(palabras:string){
    console.log(palabras);
    this.router.navigate(['/resconsolas', palabras])
  }

  buscarJuego(palabras:string){
    console.log(palabras)
    this.router.navigate(['/resjuegos', palabras])
  }

}
