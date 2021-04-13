import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ConsolasService {

  constructor(public httpClient: HttpClient) {
    console.log('Servicio de Videojuegos Listo...');

  }

  getConsola(id: string){
    let servicioRest = `http://localhost:8585/consola/${id}`;
    return this.httpClient.get(servicioRest);
  }

  getConsolas(){
    let servicioRest =  `http://localhost:8585/consolas`;
    return this.httpClient.get(servicioRest);
  }

  getJuegosConsola(id_nombre : string){
    let servicioRest = `http://localhost:8585/juegos-consola/${id_nombre}`;
    return this.httpClient.get(servicioRest);
  }

  getJuegosB(nombre: string){
    let servicioRest =  `http://localhost:8585/juegos/${nombre}`;
    return this.httpClient.get(servicioRest);
  }

  getConsolasB(nombre: string){
    let servicioRest =  `http://localhost:8585/consolas/${nombre}`;
    return this.httpClient.get(servicioRest);
  }

  getJuegoID(id: number){
    let servicioRest =  `http://localhost:8585/juegosID/${id}`;
    return this.httpClient.get(servicioRest);
  }


  getJuego(idc : string, idj: number){
    let servicioRest =  `http://localhost:8585/juego/${idc}/${idj}`;
    return this.httpClient.get(servicioRest);
  }

  agregarConsola(consola: any){
    let servicioRest = `http://localhost:8585/consolas`
    return this.httpClient.post(servicioRest, consola,{responseType: 'text'});
  }

  agregarJuego(consola: any){
    let servicioRest = `http://localhost:8585/juegos`
    return this.httpClient.post(servicioRest, consola,{responseType: 'text'});
  }

  getBlogs(){
    let servicioRest =  `http://localhost:8585/blogs`;
    return this.httpClient.get(servicioRest);
  }

  agregarBlog(consola: any){
    let servicioRest = `http://localhost:8585/blogs`
    return this.httpClient.post(servicioRest, consola,{responseType: 'text'});
  }

}
