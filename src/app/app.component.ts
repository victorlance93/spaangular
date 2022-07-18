import { Component, OnInit, ViewContainerRef } from '@angular/core';

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
      nome:'Victor',
      sobrenome:'Lance',
      profissao: 'Programador'
    },
    {
      nome:'Ezide',
      sobrenome:'Lance',
      profissao: 'Cabelereira'
    },
    {
      nome:'Helena',
      sobrenome:'Lance',
      profissao: 'Encrenqueira'
    },
    {
      nome:'Roberto',
      sobrenome:'Lance',
      profissao: 'Chato'
    },
    {
      nome:'Paulo',
      sobrenome:'Lance',
      profissao: 'Chorão'
    }
  ];

  constructor() {

  }

  ngOnInit(): void {
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
}
