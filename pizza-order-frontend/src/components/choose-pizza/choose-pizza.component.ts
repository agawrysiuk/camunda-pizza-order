import {Component, OnInit} from '@angular/core';
import {Pizza} from '../../model/generated-dto';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-choose-pizza',
  templateUrl: './choose-pizza.component.html',
  styleUrls: ['./choose-pizza.component.css']
})
export class ChoosePizzaComponent implements OnInit {

  pizzas: Pizza[] = [];

  constructor(private data: DataService) {
    this.pizzas = this.data.pizzas;
  }

  ngOnInit() {
  }

}
