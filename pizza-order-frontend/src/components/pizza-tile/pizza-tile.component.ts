import {Component, Input, OnInit} from '@angular/core';
import {PopupService} from '../../services/popup.service';
import {DataService} from '../../services/data.service';
import {Pizza} from '../../model/generated-dto';

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
    this.data.variables.pizza = this.pizza;
    this.popupService.emitChange('pizza-picked');
  }
}
