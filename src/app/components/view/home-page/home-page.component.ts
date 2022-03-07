import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef, NgZone, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller, 
  Keyboard
} from "swiper";
import { BehaviorSubject } from "rxjs";

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
  Keyboard

]);

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @ViewChild("swiperRef", { static: false }) swiperRef?: SwiperComponent;

  thumbs: any;
  slides$ = new BehaviorSubject<string[]>([""]);
  constructor(private cd: ChangeDetectorRef, private ngZone: NgZone) {}
  ngOnInit() {}

  getSlides() {
    this.slides$.next(
      Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`)
    );
  }

  indexNumber = 1;
  exampleConfig = { slidesPerView: 3 };
  slidesPerView: number = 4;
  pagination: any = false;

  keyboard= {
    enabled: true,
    onlyInViewport: false,
  }

  

  

  

  
  

  

  


  

  

}
