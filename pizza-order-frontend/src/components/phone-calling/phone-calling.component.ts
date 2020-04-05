import {Component, OnInit} from '@angular/core';
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

  moveForward() {
    if (!this.clicked) {
      document.getElementById('callingCircle').className = 'calling-circle callingCircleAfterClick';
      document.getElementById('callingImage').className = 'calling-image callingImageAfterClick';
      document.getElementById('callingText').className = 'calling-text callingTextAfterClick';
      document.getElementById('callingLine').className = 'calling-line calling-end-delayed-animation';
      document.getElementById('callingTab').className = 'calling-tab calling-tab-end-animation';
      this.clicked = true;
      setTimeout(() => {
          this.router.navigate(['pizzeria-answered']);
        }
        , 5000);
    }
  }
}
