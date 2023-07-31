import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BasesComponent } from './bases/bases.component';
import { ServicesComponent } from './services/services.component';
import { ObservablesComponent } from './observables/observables.component';
import { FormsModule } from '@angular/forms';
import { EnfantComponent } from './bases/enfant/enfant.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BasesComponent,
    ServicesComponent,
    ObservablesComponent,
    EnfantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
