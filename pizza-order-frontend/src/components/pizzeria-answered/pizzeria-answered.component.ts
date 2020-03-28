import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PickPizzaService} from "../../services/pick-pizza.service";
import {DataService} from "../../services/data.service";

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
    1: 'Superb choice! Please look at the delicious pizzas we offer.',
    2: 'No problem. Have a nice day!',
    3: 'Omg, I\'m calling the police!'
  };

  constructor(private router: Router,
              private pickPizzaService: PickPizzaService,
              public data: DataService) {

    pickPizzaService.changeEmitted$.subscribe(
      text => {
        if (text === 'pizza-picked') {
          this.pickPizzaAnimation();
        }
      });
  }

  ngOnInit() {}

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
    this.showPopupWithPizzas();
  }

  private createResponse(key: string) {
    document.getElementById('reaction-img').className = 'tile-hidden tile-img-start-animation';
    document.getElementById('reaction-text').innerText = this.reactionMap[key];
    document.getElementById('reaction-text').className = 'tile-hidden tile-text-start-animation';
  }

  private showPopupWithPizzas() {
    setTimeout(() => {
        this.pickPizzaService.emitChange('pick-pizza');
      }
      , 2000);
  }

  private pickPizzaAnimation() {
    document.getElementById('your-pick').className = 'your-answer';
    document.getElementById('picked-img').className = 'tile-hidden tile-img-start-animation';
    document.getElementById('picked-text').className = 'tile-hidden tile-text-start-animation';
  }
}
