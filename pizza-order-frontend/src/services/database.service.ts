import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {LiteralDto, PizzaDataDto} from '../model/generated-dto';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  downloadPizzaData(): Promise<PizzaDataDto> {
    return this.http.get(environment.backendUrl + '/data')
      .toPromise() as Promise<PizzaDataDto>;
  }

  downloadLiterals(): Promise<LiteralDto[]> {
    return this.http.get(environment.backendUrl + '/literals')
      .toPromise() as Promise<LiteralDto[]>;
  }
}
