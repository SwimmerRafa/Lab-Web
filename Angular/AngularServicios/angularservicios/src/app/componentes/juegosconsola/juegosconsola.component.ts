import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ConsolasService, Consola} from "../../servicios/consolas.service";

@Component({
  selector: 'app-juegosconsola',
  templateUrl: './juegosconsola.component.html',
  styleUrls: ['./juegosconsola.component.css']
})
export class JuegosconsolaComponent implements OnInit {

  juegos:any = {}

  constructor(private  consolaService: ConsolasService,
              private  activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(params=>{
      console.log(params['id'])
      this.juegos = this.consolaService.obtieneJuegos(params['id'])
    })

  }

  ngOnInit() {
  }

}
