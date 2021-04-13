import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ConsolasService} from "../../servicios/consolas.service";

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  juego : any = {}

  constructor(private activateRoute: ActivatedRoute,
              private consolaService: ConsolasService) {
    this.activateRoute.params.subscribe(params=>{
      console.log(params['id'])
      console.log(params['idJ'])
      this.juego = consolaService.obtieneJuego(params['id'],params['idJ'])
    })
  }

  ngOnInit() {
  }

}
