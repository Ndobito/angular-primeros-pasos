import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(0)">-1</button>
  `,
})
export class CounterComponent {
  counter:number = 10;

  increaseBy(value:number):void {
    (value === 1) ? this.counter += 1 : this.counter -= 1; // Mi logica
    // this.counter += value; Tambien funciona enviando 1 o -1 como value
  }

  reset():void {
    this.counter = 10;
  }

}
