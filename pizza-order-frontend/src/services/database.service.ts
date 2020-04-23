import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Conversation} from '../model/database-dto';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  downloadConversations(): Promise<Conversation[]> {
    return this.http.get(environment.databaseUrl + '/conversations')
      .toPromise() as Promise<Conversation[]>;
  }
}
