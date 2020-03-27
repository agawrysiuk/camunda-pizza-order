import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-start-process',
  templateUrl: './start-process.component.html',
  styleUrls: ['./start-process.component.css']
})
export class StartProcessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  startProcess() {
    setTimeout(() => {
        this.router.navigate(['phone-calling']);
      }
      , 1000);
  }
}
