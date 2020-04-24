import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {DataService} from '../data.service';
import {PizzaDataDto} from '../../model/generated-dto';

@Injectable()
export class PizzaDataDtoResolve implements Resolve<PizzaDataDto> {

  constructor(private data: DataService) {}

  resolve(): Promise<PizzaDataDto> {
    return this.data.getPizzaData();
  }
}
