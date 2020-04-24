import {Injectable} from '@angular/core';
import {Additions, CamundaVariables, Conversation, Pizza, PizzaDataDto} from '../model/generated-dto';
import {DatabaseService} from './database.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public variables: CamundaVariables;
  private pizzaDataDto: PizzaDataDto;
  public conversations: { [index: number]: {choice: string, reaction: string}};
  public pizzas: Pizza[];
  public additions: Additions[];

  constructor(private database: DatabaseService) {

  }

  public setVariables(variables: CamundaVariables): Promise<CamundaVariables> {
    this.variables = variables;
    return new Promise<CamundaVariables>(resolve => resolve(this.variables));
  }

  getPizzaData(): Promise<PizzaDataDto> {
    if (!this.conversations) {
      this.database.downloadPizzaData().then(importedValue => {
        this.conversations = this.convertConversation(importedValue.conversations);
        this.pizzas = importedValue.pizzas;
        this.additions = importedValue.additions;
      });
    }
    return new Promise<PizzaDataDto>(resolve => resolve(this.pizzaDataDto));
  }

  private convertConversation(importedValue: Conversation[]) {
    const map: { [index: number]: {choice: string, reaction: string}} = {};
    importedValue.forEach(value => {
      map[value.id] = {choice: value.choice, reaction: value.reaction};
    })
    return map;
  }
}
