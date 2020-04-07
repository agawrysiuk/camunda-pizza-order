import {Injectable} from '@angular/core';
import {SocketService} from './socket.service';
import {Router} from '@angular/router';
import {ProcessManagerService} from './process-manager.service';
import {StepReplyMessage} from '../model/generated-dto';

@Injectable({
  providedIn: 'root'
})
export class ViewResolverService {

  constructor(private socket: SocketService,
              private router: Router,
              private manager: ProcessManagerService) {
    this.socket.stepChanged$.subscribe(text => this.changeStep(text));
  }

  changeStep(step) {
    this.router.navigate([step]);
  }

  checkStep() {
    this.manager.findStep().then(message => {
      if (message.replyMessage === StepReplyMessage.BAD_PROCESSID) {
        this.router.navigate(['start-process']);
      } else if (message.replyMessage === StepReplyMessage.REQUEST_OK
      && message.stepId !== this.socket.stepId) {
        this.router.navigate([message.stepId]);
      }
    });
  }

}
