import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-phone-calling',
  templateUrl: './phone-calling.component.html',
  styleUrls: ['./phone-calling.component.css']
})
export class PhoneCallingComponent implements OnInit {

  private clicked: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  moveForward(callingCircle: HTMLDivElement, callingImage: HTMLImageElement, callingText: HTMLDivElement, callingLine: HTMLHRElement, callingTab: HTMLDivElement) {
    if (!this.clicked) {
      callingCircle.className = 'calling-circle callingCircleAfterClick';
      callingImage.className = 'calling-image callingImageAfterClick';
      callingText.className = 'calling-text callingTextAfterClick';
      callingLine.className = 'calling-line calling-end-delayed-animation';
      callingTab.className = 'calling-tab calling-tab-end-animation';
      this.clicked = true;
      setTimeout(() => {
          this.router.navigate(['pizzeria-answered']);
        }
        , 5000);
    }
  }
}
