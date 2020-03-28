import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartProcessComponent} from '../component/start-process/start-process.component';
import {PhoneCallingComponent} from '../component/phone-calling/phone-calling.component';
import {PizzeriaAnsweredComponent} from '../component/pizzeria-answered/pizzeria-answered.component';

const routes: Routes = [
  { path: '', component: StartProcessComponent },
  { path: 'phone-calling', component: PhoneCallingComponent },
  { path: 'pizzeria-answered', component: PizzeriaAnsweredComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
