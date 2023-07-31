import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BasesComponent } from './bases/bases.component';
import { ServicesComponent } from './services/services.component';
import { ObservablesComponent } from './observables/observables.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnfantComponent } from './bases/enfant/enfant.component';
import { AddBurgerComponent } from './services/add-burger/add-burger.component';
import { DetailBurgerComponent } from './services/detail-burger/detail-burger.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BasesComponent,
    ServicesComponent,
    ObservablesComponent,
    EnfantComponent,
    AddBurgerComponent,
    DetailBurgerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
