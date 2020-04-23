import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {DataService} from '../data.service';

@Injectable()
export class ConversationResolve implements Resolve<{[index: number]: {choice: string, reaction: string}}> {

  constructor(private data: DataService) {}

  resolve(): Promise<{ [index: number]: {choice: string, reaction: string}}> {
    return this.data.getConversation();
  }
}
