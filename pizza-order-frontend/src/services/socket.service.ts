import {Injectable} from '@angular/core';
import {Frame, Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import {Message} from '@stomp/stompjs/esm5/i-message';
import {CompatClient} from '@stomp/stompjs/esm5/compatibility/compat-client';
import {environment} from '../environments/environment';
import {DataService} from './data.service';
import {CamundaMessage} from '../model/generated-dto';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private client: CompatClient;
  public stepId;
  private stepEmitter = new Subject<any>();
  stepChanged$ = this.stepEmitter.asObservable();

  constructor(private data: DataService) {}

  public initializeWebSocketConnection(processId: string) {
    const webSocket = new SockJS(this.getConvertedSocketUrl(processId));
    this.client = Stomp.over(webSocket);
    this.client.connect({}, this.onConnect);
  }

  private onConnect = (frame?: Frame) => {
    this.client.subscribe('/user/next', (message: Message) => {
      const camundaMessage: CamundaMessage = JSON.parse(message.body);
      this.data.variables = camundaMessage.camundaVariables;
      this.stepId = camundaMessage.stepId;
      this.stepEmitter.next(this.stepId);
    });
  }

  private getConvertedSocketUrl(processId: string) {
    return environment.backendUrl + environment.socketUrl + '?processId=' + processId;
  }
}
