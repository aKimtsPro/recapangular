import { Component } from '@angular/core';
import {ThermometreService} from "../../observables/service/thermometre.service";
import {tap} from "rxjs";
import {PanierService} from "../../observables/service/panier.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  private temperature!: number
  bgClass = 'bg-gray'
  total!: number

  constructor(
    private _thermoServ: ThermometreService,
    private _panierServ: PanierService
  ) {
    _thermoServ.temperatureSub
      .pipe(
        tap( (data) => console.log(data) )
      )
      .subscribe((temp) => {
      if( temp > this.temperature )
        this.bgClass = 'bg-red'
      else if ( temp < this.temperature )
        this.bgClass = 'bg-blue'
      else
        this.bgClass = 'bg-gray'

      this.temperature = temp
    })

    this._panierServ.prix$.subscribe( total => this.total = total )
  }

}
