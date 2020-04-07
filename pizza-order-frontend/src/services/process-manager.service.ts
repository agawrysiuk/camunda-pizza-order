import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CamundaVariables, StepMessage, StepReplyMessage} from '../model/generated-dto';
import {environment} from '../environments/environment';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProcessManagerService {

  constructor(private http: HttpClient,
              private data: DataService) {
  }

  public startProcess(): Promise<CamundaVariables> {
    return this.http.get<CamundaVariables>(environment.backendUrl + '/start?id=PizzaProcess')
      .toPromise() as Promise<CamundaVariables>;
  }

  public findStep(): Promise<StepMessage> {
    if (this.data.variables && this.data.variables.processId) {
      return this.http.get(environment.backendUrl + '/get-step?processId=' + this.data.variables.processId)
        .toPromise() as Promise<StepMessage>;
    } else {
      const message: StepMessage = {
        replyMessage: StepReplyMessage.BAD_PROCESSID,
        processId: null,
        stepId: null
      }
      return new Promise<StepMessage>((resolve, reject) => {
        resolve(message);
      });
    }
  }
}
