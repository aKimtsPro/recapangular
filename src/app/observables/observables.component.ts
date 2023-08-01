import { Component } from '@angular/core';
import {interval, of} from 'rxjs'
import {BurgerApiService} from "./service/burger-api.service";
import {Burger} from "../services/burger";

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent {

  obsCold$ = of( 1,2,3,4,5 );
  // obsHot$ = interval(1000)

  burgers?: Burger[];

  constructor(private _burgerServ: BurgerApiService) {
    this.demoSub();

    _burgerServ.getBurgers().subscribe( (data: Burger[]) => this.burgers = data )
  }


  demoSub() {
    this.obsCold$.subscribe( {
      next: (data) => console.log(data),
      // error: (error) => console.log(error),
      complete: () => console.log("FIN")
    } )
    this.obsCold$.subscribe( {
      next: (data) => console.log(data),
      // error: (error) => console.log(error),
      complete: () => console.log("FIN")
    })
  }
}
