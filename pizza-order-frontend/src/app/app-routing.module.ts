import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartProcessComponent} from '../component/start-process/start-process.component';
import {PhoneCallingComponent} from '../component/phone-calling/phone-calling.component';

const routes: Routes = [
  { path: '', component: StartProcessComponent },
  { path: 'phone-calling', component: PhoneCallingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
