import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'superheroes';
  optionSelected: string;
  itemToPaint: any;

  constructor() {}

  ngOnInit() {
    this.optionSelected = 'caras';
  }

  elementToPaint(event: any): void {
    this.itemToPaint = event;
  }
}
