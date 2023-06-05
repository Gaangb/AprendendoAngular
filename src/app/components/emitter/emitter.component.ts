import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent {
  myNumber: number=0; //criando uma propriedade

  onChangeNumber(){
    this.myNumber = Math.floor(Math.random() * 10); // Pegar um numero aleatorio de valor ate 10
  }
}
