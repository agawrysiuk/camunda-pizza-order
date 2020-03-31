import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessManagerService {

  constructor(private http: HttpClient) { }

  public startProcess() {
    this.http.get<string>('http://localhost:8080/start?id=PizzaProcess').subscribe(text => console.log(text));
  }
}
