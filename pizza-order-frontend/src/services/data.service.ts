import {Injectable} from '@angular/core';
import {Pizza} from '../model/pizza';
import {DeliveryAddress} from '../model/delivery-address';
import {CamundaVariables} from '../model/dto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public pizzaPicked: Pizza;
  public addition: string;
  public address: DeliveryAddress;
  public variables: CamundaVariables;

  constructor() { }
}
