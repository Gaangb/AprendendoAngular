import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent {
  // inicializador para usar no pai, ele cria no pai e chama no filho
  @Input() name: string =''; // criando a minha propriedade que irei passar do componente pai para o filho
  @Input() userData!: {email:string, role:string} //exclamação significa que o dado será inicializado depois
}
