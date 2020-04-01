import {Component} from '@angular/core';
import {PopupService} from '../services/popup.service';
import {EmitterMessages} from "../model/emitter-messages";

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
    if (text === EmitterMessages.PICK_PIZZA) {
      this.showPizzaDialog = true;
    }
    if (text === EmitterMessages.PIZZA_PICKED) {
      this.showPizzaDialog = false;
    }
    if (text === EmitterMessages.ORDER_SUMMARY) {
      this.showOrderDialog = true;
    }
    if (text === EmitterMessages.ORDER_APPROVED || text === EmitterMessages.ORDER_DECLINED) {
      this.showOrderDialog = false;
    }
  }
}
