import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item;
  @Input() fileDir;
  @Input() picWidthPx;
  @Input() picHeightPx;
  @Input() paddingPicPx;
  @Input() showOverlay;
  @Input() overlayText;
  containerWidth;
  containerHeight;
  padding;

  @Output() onImgClicked = new EventEmitter();
  constructor() {

  }

  ngOnInit() {
    this.padding = parseInt(this.paddingPicPx);
    this.containerWidth = parseInt(this.picWidthPx) + 2 * this.padding;
    this.containerHeight = parseInt(this.picHeightPx) + 2 * this.padding;
  }

}
