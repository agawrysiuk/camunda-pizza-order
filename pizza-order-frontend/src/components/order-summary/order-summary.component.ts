import { Component, OnInit } from '@angular/core';
import {PopupService} from '../../services/popup.service';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  constructor(private popupService: PopupService,
              private data: DataService) {
  }

  ngOnInit() {
  }

  orderApproved() {
    this.popupService.emitChange('order-approved');
  }

  orderDeclined() {
    this.popupService.emitChange('order-declined');
  }

}
