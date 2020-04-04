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

  startProcess(startButton: HTMLButtonElement) {
    if (!this.processStarted) {
      this.processStarted = true;
      this.initService.init();
      startButton.className += ' orange-button-animation';
      setTimeout(() => {
          this.router.navigate(['phone-calling']);
        }
        , 1000);
    }
  }
}
