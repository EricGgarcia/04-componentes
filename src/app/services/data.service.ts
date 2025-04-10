import { Componente } from 'src/app/interface/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbumes(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getMenuopts(){
    return this.http.get<Componente[]>('/assets/data/menu-opts.json');
  }

  getHeroes(){
    return this.http.get<Componente[]>('/assets/data/superheroes.json').pipe( delay(1500) );
  }
}
