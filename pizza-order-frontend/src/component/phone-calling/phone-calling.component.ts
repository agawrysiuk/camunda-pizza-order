import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-calling',
  templateUrl: './phone-calling.component.html',
  styleUrls: ['./phone-calling.component.css']
})
export class PhoneCallingComponent implements OnInit {

  private clicked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  moveForward(callingCircle: HTMLDivElement, callingImage: HTMLImageElement, callingText: HTMLDivElement) {
    if(!this.clicked) {
      callingCircle.className = 'calling-circle callingCircleAfterClick';
      callingImage.className = 'calling-image callingImageAfterClick';
      callingText.className = 'calling-text callingTextAfterClick';
      this.clicked = true;
    }
  }
}
