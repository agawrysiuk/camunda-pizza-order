import {Injectable} from '@angular/core';
import {CamundaVariables} from '../model/generated-dto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public variables: CamundaVariables;

  constructor() { }
}
