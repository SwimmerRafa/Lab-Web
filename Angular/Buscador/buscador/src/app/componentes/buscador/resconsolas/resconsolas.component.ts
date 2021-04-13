import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ConsolasService} from '../../../servicios/consolas.service';

@Component({
  selector: 'app-resconsolas',
  templateUrl: './resconsolas.component.html',
  styleUrls: ['./resconsolas.component.css']
})
export class ResconsolasComponent implements OnInit {

  consolas: any;
  palabrasBusqueda: string

  constructor(private activatedRoute: ActivatedRoute, private consolasServive: ConsolasService) {
    this.activatedRoute.params.subscribe(params =>{
      this.consolas = new Promise((resolve, reject) => {
        this.consolasServive.getConsolasB(params["palabrasBusqueda"]).subscribe(consolas =>{
          console.log(consolas);
          resolve(consolas);
        })
      })
    })
  }

  ngOnInit() {

  }

}
