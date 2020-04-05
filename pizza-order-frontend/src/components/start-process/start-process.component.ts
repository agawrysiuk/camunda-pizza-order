import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {InitService} from "../../services/init.service";

@Component({
  selector: 'app-start-process',
  templateUrl: './start-process.component.html',
  styleUrls: ['./start-process.component.css']
})
export class StartProcessComponent implements OnInit {

  private processStarted: boolean = false;

  constructor(private router: Router,
              private initService: InitService) { }

  ngOnInit() {
  }

  startProcess() {
    if (!this.processStarted) {
      this.processStarted = true;
      document.getElementById('startButton').className += ' orange-button-animation';
      document.getElementById('hideButton').className += ' hide-button-animation';
      setTimeout(() => {
          this.initService.init();
        }
        , 1000);
    }
  }
}
