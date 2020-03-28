import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from '../../model/pizza';

@Component({
  selector: 'app-pizza-tile',
  templateUrl: './pizza-tile.component.html',
  styleUrls: ['./pizza-tile.component.css']
})
export class PizzaTileComponent implements OnInit {

  @Input()
  public pizza: Pizza;

  constructor() { }

  ngOnInit() {
  }

}
