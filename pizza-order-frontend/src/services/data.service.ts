import { Injectable } from '@angular/core';
import {Pizza} from '../model/pizza';
import {DeliveryAddress} from '../model/delivery-address';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public pizzaPicked: Pizza;
  public addition: string;
  public address: DeliveryAddress;

  constructor() { }
}
