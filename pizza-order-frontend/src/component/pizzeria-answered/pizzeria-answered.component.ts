import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pizzeria-answered',
  templateUrl: './pizzeria-answered.component.html',
  styleUrls: ['./pizzeria-answered.component.css']
})
export class PizzeriaAnsweredComponent implements OnInit {

  public answersMap: { [ index: number ]: string} = {
    1 : 'Hello, I\'d like to order some pizza.',
    2 : 'Oh, sorry, wrong number!',
    3 : '... (uncomfortable silence)'
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  chooseAction(key: string) {
    for (let mapKey in this.answersMap) {
      if (mapKey !== key) {
        document.getElementById(mapKey).className = 'tile-hidden';
      } else {
        document.getElementById(mapKey).className = 'conversation-tile';
        document.getElementById(mapKey + '-paragraph').className = 'your-answer';
      }
    }
  }
}
