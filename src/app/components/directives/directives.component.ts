import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  size = 40; // criando propriedades para utilizar no ngStyle dinamicamente
  font = 'Arial';
  color = 'red';

  classes = ["green-title", "small-title"] //criando classes para serem adicionadas no meu componente de forma dinamica

  underline = 'underline-title' // criando uma classe unica
}
