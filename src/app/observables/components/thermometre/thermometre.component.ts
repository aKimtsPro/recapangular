import { Component } from '@angular/core';
import {ThermometreService} from "../../service/thermometre.service";

@Component({
  selector: 'app-thermometre',
  templateUrl: './thermometre.component.html',
  styleUrls: ['./thermometre.component.scss']
})
export class ThermometreComponent {

  temperature!: number
  tempChange?: number

  constructor(private _thermoServ: ThermometreService) {
    this._thermoServ.temperatureSub.subscribe( (temp) => this.temperature = temp )
  }

  onChangeTemp() {
    if( this.tempChange )
      this._thermoServ.temperature = this.tempChange
  }
}
