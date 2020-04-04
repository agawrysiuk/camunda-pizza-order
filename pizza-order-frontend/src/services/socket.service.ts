import {Injectable} from '@angular/core';
import {Client} from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private client: Client;

  constructor() { }

  public initializeWebSocket(processId: string) {
  }
}
