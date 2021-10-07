import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'gb-green-button',
  template: `
   <button class="button button1" (click)="mensaje()">Boton de Pago</button>
   <button class="button button2" (click)="mensaje()">Boton de tranferencias</button>
  `,
  styles: [
    `.button {
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
    }

  .button1 {background-color: #4CAF50;} /* Green */
  .button2 {background-color: #008CBA;} /* Blue */`
  ]
})
export class GreenButtonComponent implements OnInit, OnChanges {

  @Input() mensajeInput;

  constructor() { }


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  mensaje(): void{
    alert(this.mensajeInput);
  }

}
