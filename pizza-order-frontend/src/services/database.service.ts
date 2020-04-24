import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {PizzaDataDto} from '../model/generated-dto';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  downloadConversations(): Promise<PizzaDataDto> {
    return this.http.get(environment.databaseUrl + '/conversations')
      .toPromise() as Promise<PizzaDataDto>;
  }
}
