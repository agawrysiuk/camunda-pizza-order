import {Component, OnInit} from '@angular/core';
import {Pizza} from '../../model/generated-dto';


@Component({
  selector: 'app-choose-pizza',
  templateUrl: './choose-pizza.component.html',
  styleUrls: ['./choose-pizza.component.css']
})
export class ChoosePizzaComponent implements OnInit {

  pizzas: Pizza[] = [
    {
      name: 'Salami',
      photo: '/assets/images/pizzas/salami.jpg',
      components: 'Tomato sauce, Cheese, Salami',
      price: 8.99,
      extras: false
    },
    {
      name: 'Four-Cheese',
      photo: '/assets/images/pizzas/four-cheese.jpg',
      components: 'Tomato sauce, Ricotta, Mozzarella, Gorgonzola Piccante, Parmesan',
      price: 7.99,
      extras: false
    },
    {
      name: 'Capriciosa',
      photo: '/assets/images/pizzas/capriciosa.jpg',
      components: 'Tomato sauce, Cheese, Italian baked ham, Mushroom, Eggs',
      price: 10.99,
      extras: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
