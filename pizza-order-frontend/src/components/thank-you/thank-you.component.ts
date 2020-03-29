import { Component, OnInit } from '@angular/core';
import {PopupService} from '../../services/popup.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  constructor(private popupService: PopupService) {
    this.popupService.emitChange('order-summary');
    this.popupService.changeEmitted$.subscribe(text => {
      if (text === 'order-approved') {
        document.getElementById('title-text').innerHTML = 'Thank you!<br />Your order has been <span class="text-orange">approved.</span>';
      }
      if (text === 'order-declined') {
        document.getElementById('title-text').innerHTML = 'Thank you!<br />Your order has been <span class="text-orange">declined.</span>';
      }
    });
  }

  ngOnInit() {
  }

}
