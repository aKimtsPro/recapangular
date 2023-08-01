import { Component } from '@angular/core';
import {ThermometreService} from "../../observables/service/thermometre.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  private temperature!: number
  bgClass = 'bg-gray'

  constructor(private _thermoServ: ThermometreService) {
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
  }

}
