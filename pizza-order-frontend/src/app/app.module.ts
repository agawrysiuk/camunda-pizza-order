import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneCallingComponent } from '../component/phone-calling/phone-calling.component';
import { CallingAnimationComponent } from '../component/calling-animation/calling-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneCallingComponent,
    CallingAnimationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
