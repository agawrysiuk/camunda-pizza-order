import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PopupService} from '../../services/popup.service';
import {DataService} from '../../services/data.service';
import {EmitterMessages} from '../../model/emitter-messages';
import {ViewResolverService} from '../../services/view-resolver.service';
import {ProcessManagerService} from '../../services/process-manager.service';

@Component({
  selector: 'app-pizzeria-answered',
  templateUrl: './pizzeria-answered.component.html',
  styleUrls: ['./pizzeria-answered.component.css']
})
export class PizzeriaAnsweredComponent implements OnInit {

  public conversationMap: { [index: number]: {choice: string, reaction: string}} = {
    1: {choice: 'Hello, I\'d like to order some pizza.', reaction: 'Superb choice! Please look at the delicious pizzas we offer.'},
    2: {choice: 'Oh, sorry, wrong number!', reaction: 'No problem. Have a nice day!'},
    3: {choice: '... (uncomfortable silence)', reaction: 'Omg, I\'m calling the police!'}
  };

  public additionsMap: { [index: number]: string } = {
    1: 'Thick crust',
    2: 'Extra cheese',
    3: 'Additional ham',
    4: 'Nah, I\'m good, thanks',
  };

  public pickAdditions = false;
  public additionsPicked = false;
  public delivery = false;

  public showPizzaDialog: boolean = false;

  constructor(private router: Router,
              private popupService: PopupService,
              public data: DataService,
              private viewResolver: ViewResolverService,
              private manager: ProcessManagerService) {
    this.viewResolver.checkStep();
    popupService.changeEmitted$.subscribe(
      text => {
        if (text === EmitterMessages.PIZZA_PICKED) {
          this.showPizzaDialog = false;
          this.pizzaPickedAnimation();
        }
      });
  }

  ngOnInit() {}

  chooseAction(key: number) {
    for (const mapKey in this.conversationMap) {
      // @ts-ignore
      if (mapKey !== key) {
        document.getElementById(mapKey + '-answer').className = 'display-none';
      } else {
        document.getElementById(mapKey + '-answer').className = 'conversation-tile';
        document.getElementById(mapKey + '-answer-paragraph').className = 'your-answer';
      }
    }
    this.createResponse(key);
    if (key != 1) {
      setTimeout(() => {
        this.router.navigate(['']);
      }, 2500);
    } else {
      this.showPopupWithPizzas();
    }
  }

  private createResponse(key: number) {
    document.getElementById('reaction-img').className = 'tile-hidden tile-img-start-animation';
    document.getElementById('reaction-text').innerText = this.conversationMap[key].reaction;
    document.getElementById('reaction-text').className = 'tile-hidden tile-text-start-animation';
  }

  private showPopupWithPizzas() {
    setTimeout(() => {
        this.showPizzaDialog = true;
      }
      , 2000);
  }

  private pizzaPickedAnimation() {
    document.getElementById('your-pick').className = 'your-answer';
    document.getElementById('picked-img').className = 'tile-hidden tile-img-start-animation';
    document.getElementById('picked-text').className = 'tile-hidden tile-text-start-animation';
    this.pickAdditions = true;
  }

  chooseAddition(key: string) {
    this.data.variables.additions = this.additionsMap[key];
    this.additionsPicked = true;
    for (const mapKey in this.additionsMap) {
      if (mapKey !== key) {
        document.getElementById(mapKey + '-addition').className = 'display-none';
      } else {
        document.getElementById(mapKey + '-addition').className = 'conversation-tile';
        document.getElementById(mapKey + '-addition-paragraph').className = 'your-answer';
      }
    }
    this.moveForward();
  }

  private moveForward() {
    setTimeout(() => {
      this.delivery = true;
      setTimeout(() => {
          document.getElementById('calling-tab').className += ' calling-tab-end-animation';
          setTimeout(() => {
              this.manager.finishStep();
            }
            , 500);
        }
        , 2000);
    }
    , 1000);
  }
}
