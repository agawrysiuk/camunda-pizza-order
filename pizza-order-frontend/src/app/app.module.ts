import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneCallingComponent } from '../component/phone-calling/phone-calling.component';
import { CallingAnimationComponent } from '../component/calling-animation/calling-animation.component';
import { StartProcessComponent } from '../component/start-process/start-process.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PhoneCallingComponent,
    CallingAnimationComponent,
    StartProcessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
