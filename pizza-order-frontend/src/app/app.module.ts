import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneCallingComponent } from '../component/phone-calling/phone-calling.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneCallingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
