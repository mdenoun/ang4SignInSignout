import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import {GalleryService} from "./gallery.service";
import { ItemComponent } from './item/item.component';
import { ItemConfirmationComponent } from './item-confirmation/item-confirmation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GalleryComponent, ItemComponent, ItemConfirmationComponent],
  exports: [GalleryComponent],
  providers: [GalleryService]
})
export class GalleryModule { }
