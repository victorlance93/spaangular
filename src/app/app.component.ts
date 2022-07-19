import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'spa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count = 0;

  text: string = '';

  nome = 'Victor Hugo de Morais Lance';

  pessoas = [
    {
      firstName: '',
      lastName: '',
      age: 0
    }
  ];

  constructor(private peopleService: PeopleService) {

  }

  ngOnInit(): void {
    this.getPeople();
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10){
        clearInterval(interval);
      }
    },1000)
  }

 clicou(nome: string): void {
    console.log('clicou em mim',nome)
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    })
  }
}
