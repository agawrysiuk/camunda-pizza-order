import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PopupService} from '../../services/popup.service';
import {EmitterMessages} from '../../model/emitter-messages';
import {ViewResolverService} from '../../services/view-resolver.service';
import {Step} from '../../model/generated-dto';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

  @ViewChild('titleText', {static: true}) titleText: ElementRef;

  showOrderDialog = false;
  public literals: {[index: string]: string};

  constructor(private popupService: PopupService,
              private viewResolver: ViewResolverService,
              private data: DataService) {
    this.viewResolver.checkStep();
    this.showOrderDialog = true;
    this.literals = this.data.getLiteralsForStep(Step.THANK_YOU);
    this.popupService.changeEmitted$.subscribe(text => {
      if (text === EmitterMessages.ORDER_APPROVED) {
        this.titleText.nativeElement.innerHTML = this.literals.orderConfirmed;
      }
      if (text === EmitterMessages.ORDER_DECLINED) {
        this.titleText.nativeElement.innerHTML = this.literals.orderCancelled;
      }
      this.showOrderDialog = false;
    });
  }

  ngOnInit() {
  }
}
