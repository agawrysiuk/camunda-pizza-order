import {Injectable} from '@angular/core';
import {ProcessManagerService} from './process-manager.service';
import {SocketService} from './socket.service';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(private processManager: ProcessManagerService,
              private socket: SocketService,
              private data: DataService) { }

  public init() {
    this.processManager.startProcess()
      .then(variables => this.data.setVariables(variables))
      .then(variables => this.socket.initializeWebSocket(variables.processId));
  }
}
