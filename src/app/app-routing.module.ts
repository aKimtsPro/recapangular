import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasesComponent } from './bases/bases.component';
import { ServicesComponent } from './services/services.component';
import { ObservablesComponent } from './observables/observables.component';
import { AddBurgerComponent } from './services/add-burger/add-burger.component';
import { DetailBurgerComponent } from './services/detail-burger/detail-burger.component';
import { EditBurgerComponent } from './services/edit-burger/edit-burger.component';

const routes: Routes = [
  { path : 'bases', component : BasesComponent },
  { path : 'services', component : ServicesComponent },
  { path : 'observables', component : ObservablesComponent },
  { path : 'burgers/add', component : AddBurgerComponent },
  { path : 'burgers/:id', component : DetailBurgerComponent },
  { path : 'burgers/edit/:id', component : EditBurgerComponent },
  // { path : 'not-found', compondent : NotFoundComponent },
  // { path : '**', redirectTo : 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
