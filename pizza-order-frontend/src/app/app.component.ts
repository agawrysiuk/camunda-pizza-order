import {Component} from '@angular/core';
import {PopupService} from '../services/popup.service';
import {SocketService} from '../services/socket.service';
import {ViewResolverService} from '../services/view-resolver.service';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private popupService: PopupService,
              private data: DataService,
              private socket: SocketService,
              private viewResolver: ViewResolverService) {}
}
