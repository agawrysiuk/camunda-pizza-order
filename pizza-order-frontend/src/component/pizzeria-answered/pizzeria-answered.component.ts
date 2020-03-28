import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pizzeria-answered',
  templateUrl: './pizzeria-answered.component.html',
  styleUrls: ['./pizzeria-answered.component.css']
})
export class PizzeriaAnsweredComponent implements OnInit {

  public answersMap: { [index: number]: string } = {
    1: 'Hello, I\'d like to order some pizza.',
    2: 'Oh, sorry, wrong number!',
    3: '... (uncomfortable silence)'
  };

  public reactionMap: { [index: number]: string } = {
    1: 'Superb choice! Please look at the various selection that will appear on your screen in a second.',
    2: 'No problem. Have a nice day!',
    3: 'Omg, I\'m calling the police!'
  };

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  chooseAction(key: string) {
    for (let mapKey in this.answersMap) {
      if (mapKey !== key) {
        document.getElementById(mapKey).className = 'display-none';
      } else {
        document.getElementById(mapKey).className = 'conversation-tile';
        document.getElementById(mapKey + '-paragraph').className = 'your-answer';
      }
    }
    this.createResponse(key);
  }

  private createResponse(key: string) {
    document.getElementById('reaction-img').className = 'tile-hidden tile-img-start-animation';
    document.getElementById('reaction-text').innerText = this.reactionMap[key];
    document.getElementById('reaction-text').className = 'tile-hidden tile-text-start-animation';
  }
}
