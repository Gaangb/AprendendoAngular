import { Injectable } from '@angular/core';
import { Lista } from '../Lista';

@Injectable({
  providedIn: 'root'
})
export class ListNewService {

  remover (lista: Lista[], compra: Lista){
    return lista.filter((a)=> compra.nome !== a.nome)
  }
  constructor() { }
}
