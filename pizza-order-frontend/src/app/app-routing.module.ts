import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartProcessComponent} from '../components/start-process/start-process.component';
import {PhoneCallingComponent} from '../components/phone-calling/phone-calling.component';
import {PizzeriaAnsweredComponent} from '../components/pizzeria-answered/pizzeria-answered.component';
import {WriteAddressComponent} from '../components/write-address/write-address.component';
import {ThankYouComponent} from '../components/thank-you/thank-you.component';

const routes: Routes = [
  { path: '', component: StartProcessComponent },
  { path: 'start-process', component: StartProcessComponent },
  { path: 'phone-calling', component: PhoneCallingComponent },
  { path: 'pizzeria-answered', component: PizzeriaAnsweredComponent },
  // { path: 'pizzeria-answered', redirectTo: 'write-address' },
  { path: 'write-address', component: WriteAddressComponent },
  { path: 'thank-you', component: ThankYouComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
