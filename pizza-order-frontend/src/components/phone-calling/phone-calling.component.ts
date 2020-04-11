import {Component, OnInit} from '@angular/core';
import {ProcessManagerService} from "../../services/process-manager.service";
import {ViewResolverService} from "../../services/view-resolver.service";

@Component({
  selector: 'app-phone-calling',
  templateUrl: './phone-calling.component.html',
  styleUrls: ['./phone-calling.component.css']
})
export class PhoneCallingComponent implements OnInit {

  private clicked: boolean = false;

  constructor(private viewResolver: ViewResolverService,
              private manager: ProcessManagerService) {
    this.viewResolver.checkStep();
  }

  ngOnInit() {
  }

  moveForward() {
    if (!this.clicked) {
      document.getElementById('callingCircle').className = 'calling-circle callingCircleAfterClick';
      document.getElementById('callingImage').className = 'calling-image callingImageAfterClick';
      document.getElementById('callingText').className = 'calling-text callingTextAfterClick';
      document.getElementById('callingLine').className = 'calling-line calling-end-delayed-animation';
      document.getElementById('callingTab').className = 'calling-tab calling-tab-end-animation';
      this.clicked = true;
      setTimeout(() => {
          this.manager.finishStep();
        }
        , 5000);
    }
  }
}
