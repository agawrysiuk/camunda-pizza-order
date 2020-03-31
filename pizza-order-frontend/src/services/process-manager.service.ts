import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessManagerService {

  private startUrl: 'http://localhost:8080/start?id=PizzaProcess';
  private processName: 'PizzaProcess';

  constructor(private http: HttpClient) { }

  public startProcess() {
    this.http.get<string>(this.startUrl).subscribe(text => console.log(text));
  }
}
