import {Injectable} from '@angular/core';
import {SocketService} from './socket.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ViewResolverService {

  constructor(private socket: SocketService,
              private router: Router) {
    this.socket.stepChanged$.subscribe(text => this.changeStep(text));
  }

  changeStep(step) {
    this.router.navigate([step]);
  }
}
