import { Injectable } from '@angular/core';
import {Burger} from "../../services/burger";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private _panier : Burger[] = []
  private _totalSub = new BehaviorSubject<number>(0)

  constructor() { }

  get panier(): Burger[]{
    return this._panier
  }

  ajouter(aAjouter: Burger){
    this._panier.push( aAjouter );
    let total = 0;
    for( const e of this._panier ){
      total += +e.price;
    }

    this._totalSub.next( total );
  }

  get prix$(){
    return this._totalSub.asObservable();
  }

}
