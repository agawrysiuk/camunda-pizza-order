import {Injectable} from '@angular/core';
import {Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private client;
  private readonly serverUrl: string;

  constructor() {
    this.serverUrl = 'http://localhost:8080/socket';
  }

  public initializeWebSocketConnection(processId: string) {
    const webSocket = new SockJS(this.serverUrl);
    this.client = Stomp.over(webSocket);
    this.client.connect();
  }
}
