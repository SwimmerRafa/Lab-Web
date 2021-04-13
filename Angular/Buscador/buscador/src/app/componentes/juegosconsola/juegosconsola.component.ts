import { Component, OnInit } from '@angular/core';
import { ConsolasService } from '../../servicios/consolas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-juegosconsola',
  templateUrl: './juegosconsola.component.html',
  styleUrls: ['./juegosconsola.component.css']
})
export class JuegosconsolaComponent implements OnInit {

  juegos :any;
  idC: any;

  constructor( private consolasService:ConsolasService, private activatedRoute:ActivatedRoute) {
     this.activatedRoute.params.subscribe(params => {
       this.juegos = new Promise((resolve, reject) => {
         this.consolasService.getJuegosConsola(params["id"]).subscribe(juegos =>{
           this.idC = params["id"]
           console.log(juegos);
           resolve(juegos);
         })
       })
     })
  }

  ngOnInit() {

  }

}
