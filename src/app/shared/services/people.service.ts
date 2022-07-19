import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }
  getPeople(): Observable<any> {
     let peopleArray = [
      {
        firstName: 'Victor',
        lastName: 'Lance',
        age: 29
      },
      {
        firstName: 'Maria',
        lastName: 'Silva',
        age: 32
      },
      {
        firstName: 'Joao',
        lastName: 'Pereira',
        age: 55
      },
      {
        firstName: 'Márcio',
        lastName: 'Santos',
        age: 40
      }
     ]

     return of(peopleArray)
  }
}
