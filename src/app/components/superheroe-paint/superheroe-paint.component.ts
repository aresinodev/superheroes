import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-superheroe-paint',
  templateUrl: './superheroe-paint.component.html',
  styleUrls: ['./superheroe-paint.component.css']
})
export class SuperheroePaintComponent implements OnInit {
  private _itemToPaint: any;
  head: string;
  body: string;
  legs: string;
  coat: string;

  @Input() set itemToPaint(value: any) {
    this._itemToPaint = value;

    switch (value.type) {
      case 'caras':
        this.head = value.url;
        break;

      case 'cuerpo':
        this.body = value.url;
        break;

      case 'piernas':
        this.legs = value.url;
        break;

      case 'capa':
        this.coat = value.url;
        break;
    }
  }

  get itemToPaint(): any {
    return this._itemToPaint;
  }

  constructor() {}

  ngOnInit() {}
}
