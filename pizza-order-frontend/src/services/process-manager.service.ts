import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CamundaVariables} from '../model/generated-dto';

@Injectable({
  providedIn: 'root'
})
export class ProcessManagerService {

  constructor(private http: HttpClient) { }

  public startProcess(): Promise<CamundaVariables> {
    return this.http.get<CamundaVariables>('http://localhost:8080/start?id=PizzaProcess')
      .toPromise() as Promise<CamundaVariables>;
  }
}
