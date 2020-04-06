import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CamundaVariables} from '../model/generated-dto';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProcessManagerService {

  constructor(private http: HttpClient) { }

  public startProcess(): Promise<CamundaVariables> {
    return this.http.get<CamundaVariables>(environment.backendUrl + '/start?id=PizzaProcess')
      .toPromise() as Promise<CamundaVariables>;
  }

  public findStep(): Promise<any> {
    return this.http.get(environment.backendUrl + '/start?id=PizzaProcess').toPromise();
  }
}
