import { Component } from '@angular/core';
import {PopupService} from '../services/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showPizzaDialog: boolean = false;
  showOrderDialog: boolean = false;

  constructor(private popupService: PopupService) {
    popupService.changeEmitted$.subscribe(
      text => {
        this.parseEmitter(text);
      });
  }

  private parseEmitter(text: any) {
    if (text === 'pick-pizza') {
      this.showPizzaDialog = true;
    }
    if (text === 'pizza-picked') {
      this.showPizzaDialog = false;
    }
    if (text === 'order-summary') {
      this.showOrderDialog = true;
    }
    if (text === 'order-approved' || text === 'order-declined') {
      this.showOrderDialog = false;
    }
  }
}
