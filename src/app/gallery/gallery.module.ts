import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import {GalleryService} from "./gallery.service";
import { ItemComponent } from './item/item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GalleryComponent, ItemComponent],
  exports: [GalleryComponent],
  providers: [GalleryService]
})
export class GalleryModule { }
