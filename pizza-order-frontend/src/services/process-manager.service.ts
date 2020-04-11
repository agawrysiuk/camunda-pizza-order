import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CamundaVariables, StepMessage, StepReplyMessage} from '../model/generated-dto';
import {environment} from '../environments/environment';
import {DataService} from './data.service';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProcessManagerService {

  stepId: string;

  private stepEmitter = new Subject<any>();
  stepChanged$ = this.stepEmitter.asObservable();

  constructor(private http: HttpClient,
              private data: DataService) {
  }

  public startProcess(): Promise<CamundaVariables> {
    return this.http.get<CamundaVariables>(environment.backendUrl + '/start?id=PizzaProcess')
      .toPromise() as Promise<CamundaVariables>;
  }

  public finishStep(): void {
    this.data.variables.stepId = this.stepId;
    this.http.post
    (environment.backendUrl + '/finish-step?processId=' + this.data.variables.processId,
      this.data.variables)
      .subscribe();
  }

  public emitNewStep(stepId: string) {
    this.stepId = stepId;
    this.stepEmitter.next(this.stepId);
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
