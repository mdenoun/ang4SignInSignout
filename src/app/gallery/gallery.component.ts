import { Component, OnInit } from '@angular/core';
import {GalleryService} from "./gallery.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  private items;
  private currentItem;
  private filePath = "../assets/images/";
  private caption;
  private hint = "click your photo to confirm";
  private showOverlay = false;
  private overlayText="";
  constructor(service:GalleryService) {
    this.items = this.capitalizedNames(service.items);
  }

  capitalizedNames(items) {
    items.forEach(item => {
      item.capitalizedName = item.name.toUpperCase();
    })
    return items;
  }

  openConfirmationDialog(item) {
    console.log(item);
    this.currentItem = item;
    if(!this.currentItem.isHere) {
      this.caption = `Hi ${item.name}! Signing In?`;
    }
    else {
      this.caption = `Hi ${item.name}! Signing Out?`;
      this.showOverlay = true;
    }
    this.hint = "click your photo to confirm";
    this.currentItem.step=1;
  }
  presenceConfirmed() {
    if(!this.currentItem.isHere)
    {
      this.showOverlay = true;
      this.overlayText = "Yes I am";
      this.currentItem.step ++;
      let mythis= this;
      //need to rework annimation
      setTimeout(function() {
        mythis.overlayText = '';
        mythis.caption = 'Have a nice day';
        setTimeout(function() {
          mythis.currentItem.isHere = true;
          mythis.onClose();
        }, 1000);
      }, 1000);
    }
    else {
      let mythis= this;
      this.caption = 'Bye! See you soon!';
      this.hint = '';
      setTimeout(function() {
          mythis.currentItem.isHere = false;
          mythis.onClose();
        }, 1000);
    }
    console.log(this.currentItem);
  }

  onClose() {
    this.currentItem = undefined;
  }

  ngOnInit() {
  }

}
