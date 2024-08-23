import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Hero {
  id: string;
  name: string;
  alias: string;
  description: string;
  photo: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private jsonFilePath = 'assets/data/heroes.json';
  // httpClient = inject(HttpClient)
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.jsonFilePath);
  }
}
