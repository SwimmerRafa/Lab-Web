import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService } from '../../servicios/consolas.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  infoJuego :any
  nombre:any
  imagen: any;
  developer : any;
  lanzamiento : any;

  constructor( public consolaService : ConsolasService, public activRoute: ActivatedRoute ) {
    this.activRoute.params.subscribe(params =>{
      this.infoJuego = new Promise((resolve, reject) => {
        this.consolaService.getJuego(params["idC"], params["idJ"]).subscribe(juego => {
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
