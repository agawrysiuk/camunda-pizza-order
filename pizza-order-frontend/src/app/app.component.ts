import {Component} from '@angular/core';
import {PopupService} from '../services/popup.service';
import {EmitterMessages} from "../model/emitter-messages";
import {SocketService} from "../services/socket.service";
import {ViewResolverService} from "../services/view-resolver.service";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showPizzaDialog: boolean = false;
  showOrderDialog: boolean = false;

  constructor(private popupService: PopupService,
              private data: DataService,
              private socket: SocketService,
              private viewResolver: ViewResolverService) {
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
