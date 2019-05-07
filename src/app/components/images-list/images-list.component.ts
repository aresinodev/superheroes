import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImagesService } from '../../services/images/images.service';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {
  @Output() elementToShow = new EventEmitter<any>();
  private _type: string;

  @Input() set type(value: string) {
    this._type = value;
    this.getImagesListByType(this._type);
  }

  get type(): string {
    return this._type;
  }
  imagesList: any[] = [];

  constructor(private imagesService: ImagesService) {}

  ngOnInit() {}

  private getImagesListByType(name: string): void {
    this.imagesList = this.imagesService.getImagesByName(name);
  }

  private imageToPaint(item: any): void {
    item.type = this.type;
    this.elementToShow.emit(item);
  }
}
