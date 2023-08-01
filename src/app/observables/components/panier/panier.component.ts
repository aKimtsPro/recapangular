import { Component } from '@angular/core';
import {PanierService} from "../../service/panier.service";
import {Burger} from "../../../services/burger";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {

  panier: Burger[]

  constructor(private _panierServ: PanierService) {
    this.panier = _panierServ.panier;
  }



}
