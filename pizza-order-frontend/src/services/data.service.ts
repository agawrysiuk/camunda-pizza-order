import { Injectable } from '@angular/core';
import {Pizza} from '../model/pizza';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public pizzaPicked: Pizza;
  public addition: string;

  constructor() { }
}
