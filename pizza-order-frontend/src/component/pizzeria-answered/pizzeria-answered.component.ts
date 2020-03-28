import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pizzeria-answered',
  templateUrl: './pizzeria-answered.component.html',
  styleUrls: ['./pizzeria-answered.component.css']
})
export class PizzeriaAnsweredComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
