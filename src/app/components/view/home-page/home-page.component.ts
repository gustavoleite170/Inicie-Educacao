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
  styleUrls: ['./home-page-general.component.css', './home-page-1.component.css', './home-page-2.component.css', './home-page-3.component.css', './home-page-4.component.css', './home-page-5.component.css', './home-page-6.component.css', './home-page-7.component.css', './home-page-8.component.css', './home-page-9.component.css']
})
export class HomePageComponent implements OnInit {

  @ViewChild("swiperRef", { static: false }) swiperRef?: SwiperComponent;

  thumbs: any;
  slides$ = new BehaviorSubject<string[]>([""]);
  constructor(private cd: ChangeDetectorRef, private ngZone: NgZone) {}
  ngOnInit() {}

  navigation = false;
  toggleNavigation() {
    this.navigation = !this.navigation;
  }

  indexNumber = 1;
  exampleConfig = { slidesPerView: 6 };
  slidesPerView: number = 6;
  pagination: any = false;

  keyboard= {
    enabled: true,
    onlyInViewport: false,
  }

  breakpointsTestimonials = {
    800: { slidesPerView: 2, spaceBetween: 30 },
  };


  slidesPerGroup = 0;
  breakpointsClients = {
    400: { slidesPerView: 3, spaceBetween: 40, slidesPerGroup: 3 },
    550: { slidesPerView: 4, spaceBetween: 40, slidesPerGroup: 4 },
    700: { slidesPerView: 5, spaceBetween: 30, slidesPerGroup: 5 },
    1000: { slidesPerView: 6, spaceBetween: 30, slidesPerGroup: 6 },
  };

  breakpointsPartners = {
    1200: { slidesPerView: 2, spaceBetween: 260},
  }





  

  

  

  
  

  

  


  

  

}
