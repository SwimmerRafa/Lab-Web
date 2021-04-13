import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ConsolasService, Consola} from "../../servicios/consolas.service";

@Component({
  selector: 'app-infoconsola',
  templateUrl: './infoconsola.component.html',
  styleUrls: ['./infoconsola.component.css']
})
export class InfoconsolaComponent implements OnInit {

  consola:any = {}

  constructor(private activateRoute: ActivatedRoute,
              private consolaService: ConsolasService) {
    this.activateRoute.params.subscribe(params =>{
      console.log(params['id'])
      this.consola = this.consolaService.obtieneConsola(params['id'])
    })
  }
  ngOnInit() {
  }

}
