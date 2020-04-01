import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';
import {CamundaVariables} from '../model/generated-dto';

@Injectable({
  providedIn: 'root'
})
export class ProcessManagerService {

  constructor(private http: HttpClient,
              private data: DataService) { }

  public startProcess() {
    this.http.get<CamundaVariables>('http://localhost:8080/start?id=PizzaProcess')
      .subscribe(variables => this.data.variables = variables);
  }
}
