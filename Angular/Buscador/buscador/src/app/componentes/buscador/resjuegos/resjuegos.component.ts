import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsolasService } from '../../../servicios/consolas.service';

@Component({
  selector: 'app-resjuegos',
  templateUrl: './resjuegos.component.html',
  styleUrls: ['./resjuegos.component.css']
})
export class ResjuegosComponent implements OnInit {

  juegos: any;
  palabrasBusqueda: string

  constructor(private activatedRoute: ActivatedRoute, private consolasServive: ConsolasService) {
    this.activatedRoute.params.subscribe(params =>{
      this.juegos = new Promise((resolve, reject) => {
        this.consolasServive.getJuegosB(params["palabrasBusqueda"]).subscribe(juegos =>{
          console.log(juegos);
          resolve(juegos);
        })
      })
    })
  }

  ngOnInit(): void {

  }

}
