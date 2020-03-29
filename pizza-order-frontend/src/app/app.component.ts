import { Component } from '@angular/core';
import {PopupService} from '../services/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showDialog: boolean = false;

  constructor(private popupService: PopupService) {
    popupService.changeEmitted$.subscribe(
      text => {
        this.makeSomethingHappend(text);
      });
  }

  private makeSomethingHappend(text: any) {
    if (text === 'pick-pizza') {
      this.showDialog = true;
    }
    if (text === 'pizza-picked') {
      this.showDialog = false;
    }
  }
}
