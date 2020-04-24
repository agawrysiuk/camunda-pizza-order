import {Injectable} from '@angular/core';
import {CamundaVariables, Conversation} from '../model/generated-dto';
import {DatabaseService} from './database.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public variables: CamundaVariables;
  private conversations: { [index: number]: {choice: string, reaction: string}};

  constructor(private database: DatabaseService) {

  }

  public setVariables(variables: CamundaVariables): Promise<CamundaVariables> {
    this.variables = variables;
    return new Promise<CamundaVariables>(resolve => resolve(this.variables));
  }

  getConversation(): Promise<{ [index: number]: {choice: string, reaction: string}}> {
    if (!this.conversations) {
      this.database.downloadConversations().then(importedValue => this.conversations = this.convertConversation(importedValue));
    }
    return new Promise<{[index: number]: {choice: string, reaction: string}}>(resolve => resolve(this.conversations));
  }

  private convertConversation(importedValue: Conversation[]) {
    const map: { [index: number]: {choice: string, reaction: string}} = {};
    importedValue.forEach(value => {
      map[value.id] = {choice: value.choice, reaction: value.reaction};
    })
    return map;
  }
}
