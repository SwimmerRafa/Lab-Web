import { Component, OnInit } from '@angular/core';
import {ConsolasService} from '../../servicios/consolas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-juegobusqueda',
  templateUrl: './juegobusqueda.component.html',
  styleUrls: ['./juegobusqueda.component.css']
})

export class JuegobusquedaComponent implements OnInit {
  infoJuego :any
  nombre:any
  imagen: any;
  developer : any;
  lanzamiento : any;

  constructor( public consolaService : ConsolasService, public activRoute: ActivatedRoute ) {
    this.activRoute.params.subscribe(params =>{
      this.infoJuego = new Promise((resolve, reject) => {
        this.consolaService.getJuegoID(params["idJ"]).subscribe(juego => {
            console.log(juego)
            this.nombre = juego[0].nombre;
            this.imagen = juego[0].imagen;
            this.developer = juego[0].developer;
            this.lanzamiento = juego[0].lanzamiento;
            resolve(juego);
          }
        )
      })
    })
  }

  ngOnInit() {

  }

}
