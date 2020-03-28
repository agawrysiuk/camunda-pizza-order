import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartProcessComponent} from '../components/start-process/start-process.component';
import {PhoneCallingComponent} from '../components/phone-calling/phone-calling.component';
import {PizzeriaAnsweredComponent} from '../components/pizzeria-answered/pizzeria-answered.component';

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
