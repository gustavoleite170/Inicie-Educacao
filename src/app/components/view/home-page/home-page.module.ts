import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule { }
