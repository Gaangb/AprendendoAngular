import { Component } from '@angular/core';
import { Lista } from 'src/app/Lista';
import { ListNewService } from 'src/app/services/list-new.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent {
  compras: Lista[] = [
    {nome: "macarrão", preco: 20 },
    {nome: "abacate", preco: 12},
    {nome:"arroz", preco: 25},
  ]

  constructor(private listNewService:ListNewService){}

  removerProduto(compra: Lista){
    this.compras = this.listNewService.remover(this.compras, compra);
  }
}
