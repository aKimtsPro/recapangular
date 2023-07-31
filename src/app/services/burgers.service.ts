import { Injectable } from '@angular/core';
import { Burger } from './burger';

@Injectable({
  providedIn: 'root'
})
export class BurgersService {

  private _burgers : Burger[] = [
    { id : 1, name : 'Classique', ingredients : ['Salade', 'Tomates', 'Oignons', 'Hâché', 'Andalouse'], price : 5, picture : 'https://www.club-sandwich.net/images/photorecettes/burger-classic.jpg', available : true },
    { id : 2, name : 'Montagnard', ingredients : ['Salade', 'Oignons caramélisés', 'Fromage à raclette', 'Hâché', 'Lard Fûmé', 'Sauce poivre'], price : 19, picture : 'https://www.sherpa.net/sites/default/files/recette/burger.jpg', available : true }
  ]

  constructor() { }

  getAll() : Burger[] {
    return this._burgers;
  }

  getById(id : number) : Burger|undefined {
    return this._burgers.find(b => b.id === id);
  }

  add(burger : Burger) : void {
    burger.id = Math.max(...this._burgers.map(b => b.id)) + 1;
    this._burgers.push(burger);
  }

  update(id : number, burger : Burger) : void {
    let burgerToUpdate = this._burgers.find(b => b.id === id);

    if(burgerToUpdate) {
      burgerToUpdate.name = burger.name;
      burgerToUpdate.price = burger.price;
      burgerToUpdate.picture = burger.picture;
      burgerToUpdate.available = burger.available;
      burgerToUpdate.ingredients = burger.ingredients;
    }
  }

  updateAvailability(id : number) : void {
    let burgerToUpdate = this._burgers.find(b => b.id === id);

    if(burgerToUpdate) {
      burgerToUpdate.available = !burgerToUpdate.available;
    }
  }

  delete(id : number) : void {
    this._burgers = this._burgers.filter(b => b.id !== id);
  }
}
