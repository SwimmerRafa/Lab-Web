import { Component, OnInit } from '@angular/core';
import {ConsolasService, Consola} from "../../servicios/consolas.service";

@Component({
  selector: 'app-consolas',
  templateUrl: './consolas.component.html',
  styleUrls: ['./consolas.component.css']
})
export class ConsolasComponent implements OnInit {

  consolas: Consola[] = []
  constructor(private  consolaService: ConsolasService) { }

  ngOnInit() {
    this.consolas = this.consolaService.obtieneConsolas()
    console.log(this.consolas)
  }

}
