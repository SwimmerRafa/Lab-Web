import { Component } from '@angular/core';
@Component({
  selector: 'app-accordion',
  templateUrl: 'accordion.component.html'
})

export class AccordionComponent {
  album1:string = 'YHLQMDLG'
  artista1:string = 'Bad Bunny'
  lanzamiento1:string = 'Marzo 2020'

  album2:string = 'Parachutes'
  artista2:string = 'Coldplay'
  lanzamiento2:string = 'Julio 2000'

  album3:string = 'Blurryface'
  artista3:string = 'Twety One Pilots'
  lanzamiento3:string = 'Mayo 2015'
}
