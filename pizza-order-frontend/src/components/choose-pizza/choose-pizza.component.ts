import { Component, OnInit } from '@angular/core';
import {Pizza} from "../../model/pizza";

@Component({
  selector: 'app-choose-pizza',
  templateUrl: './choose-pizza.component.html',
  styleUrls: ['./choose-pizza.component.css']
})
export class ChoosePizzaComponent implements OnInit {

  pizzas: Pizza[] = [
    {
      name: 'Salami',
      image: '/assets/images/pizzas/salami.jpg',
      components: 'Tomato sauce, Cheese, Salami',
      price: '8.99 EUR'
    },
    {
      name: 'Four-Cheese',
      image: '/assets/images/pizzas/four-cheeese.jpg',
      components: 'Tomato sauce, Ricotta, Mozzarella, Gorgonzola Piccante, Parmesan',
      price: ''
    },
    {
      name: 'Capriciosa',
      image: '/assets/images/pizzas/capriciosa.jpg',
      components: 'Tomato sauce, Cheese, Italian baked ham, Mushroom, Eggs',
      price: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
