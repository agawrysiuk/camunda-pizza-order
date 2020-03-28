import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from '../../model/pizza';
import {PickPizzaService} from '../../services/pick-pizza.service';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-pizza-tile',
  templateUrl: './pizza-tile.component.html',
  styleUrls: ['./pizza-tile.component.css']
})
export class PizzaTileComponent implements OnInit {

  @Input()
  public pizza: Pizza;

  constructor(private pizzaService: PickPizzaService,
              private data: DataService) {

  }

  ngOnInit() {
  }

  choosePizza() {
    this.data.pizzaPicked = this.pizza;
    this.pizzaService.emitChange('pizza-picked');
  }
}
