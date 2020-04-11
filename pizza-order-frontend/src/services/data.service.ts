import {Injectable} from '@angular/core';
import {CamundaVariables} from '../model/generated-dto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public variables: CamundaVariables;

  constructor() {

  }

  public setVariables(variables: CamundaVariables): Promise<CamundaVariables> {
    this.variables = variables;
    return new Promise<CamundaVariables>(resolve => resolve(this.variables));
  }
}
