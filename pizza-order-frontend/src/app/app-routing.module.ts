import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartProcessComponent} from '../components/start-process/start-process.component';
import {PhoneCallingComponent} from '../components/phone-calling/phone-calling.component';
import {PizzeriaAnsweredComponent} from '../components/pizzeria-answered/pizzeria-answered.component';
import {OrderSummaryComponent} from '../components/order-summary/order-summary.component';
import {WriteAddressComponent} from '../components/write-address/write-address.component';

const routes: Routes = [
  { path: '', component: StartProcessComponent },
  { path: 'phone-calling', component: PhoneCallingComponent },
  { path: 'pizzeria-answered', component: PizzeriaAnsweredComponent },
  { path: 'write-address', component: WriteAddressComponent },
  { path: 'order-summary', component: OrderSummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
