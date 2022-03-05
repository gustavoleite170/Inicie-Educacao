import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrousselComponent } from './carroussel.component';
import {SwiperModule} from 'swiper/angular'



@NgModule({
  declarations: [CarrousselComponent],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [CarrousselComponent]
})
export class CarrousselModule { }
