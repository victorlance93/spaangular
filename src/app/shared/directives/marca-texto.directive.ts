import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[spaMarcaTexto]'
})
export class MarcaTextoDirective implements OnInit{
  @Input() corDeFundo = 'yellow';
  @Input() corDoTexto = 'white';
 
  constructor(private elemento:  ElementRef) { }

  ngOnInit(): void {
      this.mudarFundo();
  }

  private mudarFundo(cor:  string = 'yellow'){
    this.elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor;
    this.elemento.nativeElement.stle.color = this.corDoTexto;
    this.elemento.nativeElement.style.fontWeigth = 'bold';
  }
}
