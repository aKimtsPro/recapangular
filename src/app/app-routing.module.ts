import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasesComponent } from './bases/bases.component';
import { ServicesComponent } from './services/services.component';
import { ObservablesComponent } from './observables/observables.component';
import { AddBurgerComponent } from './services/add-burger/add-burger.component';
import { DetailBurgerComponent } from './services/detail-burger/detail-burger.component';

const routes: Routes = [
  { path : 'bases', component : BasesComponent },
  { path : 'services', component : ServicesComponent },
  { path : 'observables', component : ObservablesComponent },
  { path : 'burgers/add', component : AddBurgerComponent },
  { path : 'burgers/:id', component : DetailBurgerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
