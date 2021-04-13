import {Injectable} from '@angular/core';

@Injectable()
export class ConsolasService {

  private consolas: Consola[] = [{
    id: 0,
    nombre: 'PC Master Race',
    descripcion: 'Juegos para PC',
    caracteristicas: 'Texto y listado de las características de la consola PC Master Race...',
    imagen: 'assets/pcmr.jpg',
    juegos: [{
      imagenJuego: 'https://img.redbull.com/images/c_crop,x_142,y_0,h_900,w_1350/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2020/4/10/t439ms9j2sswtatoatnj/valorant-art',
      Nombre: 'Valorant',
      Developer: 'Riot Games',
      Lanzamiento: '2020'
    },
      {
        imagenJuego: 'https://steamcdn-a.akamaihd.net/steam/apps/952060/capsule_616x353.jpg?t=1596857291',
        Nombre: 'Resident Evil 3',
        Developer: 'Capcom',
        Lanzamiento: '2020',
      },
      {
        imagenJuego: 'https://www.tonica.la/__export/1595353354219/sites/debate/img/2020/07/21/halo-infinite-portada.jpg_1902800913.jpg',
        Nombre: 'Halo Infinite',
        Developer: '343 Industries',
        Lanzamiento: '2020'
      }]
  },
    {
      id: 1,
      nombre: 'Playstation 4',
      descripcion: 'Juegos para PS4',
      caracteristicas: 'Texto y listado de las características de la consola Playstation 4...',
      imagen: 'assets/ps4.jpg',
      juegos: [{
        imagenJuego: 'https://as01.epimg.net/meristation/imagenes/2019/09/25/game_cover/183891271569432001.jpg',
        Nombre: 'The Last of Us Part 2',
        Developer: 'Naughty Dog',
        Lanzamiento: '19/06/2020'
      },
        {
          imagenJuego: 'https://as01.epimg.net/meristation/imagenes/2018/07/24/game_cover/467300471532422795.jpg',
          Nombre: 'Spider-Man',
          Developer: 'Insomniac Games',
          Lanzamiento: '07/09/2018',
        },
        {
          imagenJuego: 'https://as01.epimg.net/meristation/imagenes/2018/07/11/game_cover/907652701531297916.jpg',
          Nombre: 'God of War',
          Developer: 'Sony Santa Mónica',
          Lanzamiento: '20/04/2018'
        }]
    },
    {
      id: 2,
      nombre: 'Xbox One',
      descripcion: 'Juegos para Xbox One',
      caracteristicas: 'Texto y listado de las características de la consola Xbox One...',
      imagen: 'assets/xboxone.jpg',
      juegos: [{
        imagenJuego: 'https://as01.epimg.net/meristation/imagenes/2019/02/05/game_cover/300211711549357096.jpg',
        Nombre: 'Apex Legends',
        Developer: 'Respawn Entertainment',
        Lanzamiento: '04/02/2019'
      },
        {
          imagenJuego: 'https://as01.epimg.net/meristation/imagenes/2019/11/11/game_cover/64888371573505629.jpg',
          Nombre: 'Assassins Creed Odyssey',
          Developer: 'Ubisoft',
          Lanzamiento: '05/10/2018',
        },
        {
          imagenJuego: 'https://as01.epimg.net/meristation/imagenes/2017/09/20/game_cover/1505880000.jpg',
          Nombre: 'Battlefield 3',
          Developer: 'EA DICE',
          Lanzamiento: '27/10/2011'
        }]
    },
    {
      id: 3,
      nombre: 'Nintendo Switch',
      descripcion: 'Juegos para Nintendo Switch',
      caracteristicas: 'Texto y listado de las características de la consola Nintendo Switch...',
      imagen: 'assets/nswitch.jpg',
      juegos: [{
        imagenJuego: 'https://as01.epimg.net/meristation/imagenes/2017/12/30/game_cover/1514664000.jpg',
        Nombre: 'The Legend of Zelda: Breath of the Wild',
        Developer: 'Nintendo',
        Lanzamiento: '03/03/2017'
      },
        {
          imagenJuego: 'https://as01.epimg.net/meristation/imagenes/2018/02/09/game_cover/1518152400.jpg',
          Nombre: 'Super Mario Odyssey',
          Developer: 'Nintendo',
          Lanzamiento: '27/10/2017',
        },
        {
          imagenJuego: 'https://as01.epimg.net/meristation/imagenes/2019/10/24/game_cover/815992561571942138.jpg',
          Nombre: 'Luigis Mansion 3',
          Developer: 'Next Level Games',
          Lanzamiento: '31/10/2019'
        }]
    }
  ];

  constructor() {
    console.log('ConsolasService Creado...');
  }

  obtieneConsolas(): Consola[] {
    return this.consolas;
  }

  obtieneJuegos(id: string): Consola {
    return this.consolas[id];
  }

  obtieneConsola(id: string): Consola {
    return this.consolas[id];
  }

  obtieneJuego(id: string, idJ: string): Consola{
    return this.consolas[id].juegos[idJ];
}

}

export interface Consola {
  id: number;
  nombre: string;
  descripcion: string;
  caracteristicas: string;
  imagen: string;
  juegos: any;
}
