import { Component } from '@angular/core';
import {PickPizzaService} from '../services/pick-pizza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showDialog: boolean = false;

  constructor(private pickPizzaService: PickPizzaService) {
    pickPizzaService.changeEmitted$.subscribe(
      text => {
        this.showDialog = true;
      });
  }

}
