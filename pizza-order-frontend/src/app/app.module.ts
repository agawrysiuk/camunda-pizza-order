import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneCallingComponent } from '../components/phone-calling/phone-calling.component';
import { StartProcessComponent } from '../components/start-process/start-process.component';
import {AppRoutingModule} from './app-routing.module';
import { PizzeriaAnsweredComponent } from '../components/pizzeria-answered/pizzeria-answered.component';
import { PizzaTileComponent } from '../components/pizza-tile/pizza-tile.component';
import { ChoosePizzaComponent } from '../components/choose-pizza/choose-pizza.component';
import { WriteAddressComponent } from '../components/write-address/write-address.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneCallingComponent,
    StartProcessComponent,
    PizzeriaAnsweredComponent,
    PizzaTileComponent,
    ChoosePizzaComponent,
    WriteAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
