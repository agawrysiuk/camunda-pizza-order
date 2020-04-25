import {Component, Input, OnInit} from '@angular/core';
import {PopupService} from '../../services/popup.service';
import {DataService} from '../../services/data.service';
import {EmitterMessages} from '../../model/emitter-messages';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  @Input() literals: {[index: string]: string};

  constructor(private popupService: PopupService,
              private data: DataService) {
  }

  ngOnInit() {
  }

  orderApproved() {
    this.popupService.emitChange(EmitterMessages.ORDER_APPROVED);
  }

  orderDeclined() {
    this.popupService.emitChange(EmitterMessages.ORDER_DECLINED);
  }

}
