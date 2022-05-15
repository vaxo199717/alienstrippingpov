import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieData } from './interfaces/movie-data';
import { ItemData } from './interfaces/item-data';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<ItemData[]>('assets/data/items.json');
  }
}
