import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent {
  animals: Animal[] = [];

  animalDetails = '';

  showAge(animal: Animal): void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

  constructor(private listService: ListService){
    this.getAnimals();
  }

  removeAnimal(animal: Animal){
    console.log('removendo o animal');
    this.animals = this.listService.remove(this.animals, animal);

  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
