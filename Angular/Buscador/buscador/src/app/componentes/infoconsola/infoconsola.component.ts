import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService } from '../../servicios/consolas.service';

@Component({
  selector: 'app-infoconsola',
  templateUrl: './infoconsola.component.html',
  styleUrls: ['./infoconsola.component.css']
})
export class InfoconsolaComponent implements OnInit {
  infoConsolas : any;
  nombreC : any;
  ficha : any;
  idC : any;
  constructor( public consolaService : ConsolasService, public activRoute: ActivatedRoute ) {
    this.activRoute.params.subscribe(params =>{
      this.infoConsolas = new Promise((resolve, reject) => {
        this.consolaService.getConsola(params["id"]).subscribe(consola => {
            this.nombreC = consola[0].nombre;
            this.ficha = consola[0].fichatecnica;
            this.idC = consola[0]._id;
            console.log(this.nombreC, this.ficha);
            resolve(consola);
          }
        )
      })
    })
  }

    ngOnInit() {

  }

}

