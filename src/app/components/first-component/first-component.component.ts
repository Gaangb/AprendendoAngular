import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent {
  name: string = 'Matheus';
  age: number = 30;
  hobbies = ['Correr', 'Jogar', 'Estudar']
  car={
    name: "Fox",
    year: "2014",
  }
}
