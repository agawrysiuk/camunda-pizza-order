import {Injectable} from '@angular/core';
import {Frame, Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import {Message} from "@stomp/stompjs/esm5/i-message";
import {CompatClient} from "@stomp/stompjs/esm5/compatibility/compat-client";

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private client: CompatClient;
  private readonly serverUrl: string;

  constructor() {
    this.serverUrl = 'http://localhost:8080/socket';
  }

  public initializeWebSocketConnection(processId: string) {
    const webSocket = new SockJS(this.serverUrl);
    this.client = Stomp.over(webSocket);
    this.client.connect({}, this.onConnect);
  }

  private onConnect = (frame?: Frame) => {
    this.client.subscribe('/next', (message: Message) => {
      console.log('Got a message: ' + message);
    });
  }
}
