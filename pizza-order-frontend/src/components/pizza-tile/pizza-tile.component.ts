import {Component, Input, OnInit} from '@angular/core';
import {Pizza} from '../../model/pizza';
import {PopupService} from '../../services/popup.service';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-pizza-tile',
  templateUrl: './pizza-tile.component.html',
  styleUrls: ['./pizza-tile.component.css']
})
export class PizzaTileComponent implements OnInit {

  @Input()
  public pizza: Pizza;

  constructor(private popupService: PopupService,
              private data: DataService) {

  }

  ngOnInit() {
  }

  choosePizza() {
    this.data.pizzaPicked = this.pizza;
    this.popupService.emitChange('pizza-picked');
  }
}
