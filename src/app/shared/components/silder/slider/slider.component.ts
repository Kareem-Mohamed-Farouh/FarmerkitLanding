import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IImage } from '../../../interface/image/image';
@Component({
  selector: 'app-slider',
  imports: [CarouselModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  // slides!: IImage[];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000, //
    autoplayHoverPause: false,
    navSpeed: 4000, //
    slideTransition: 'linear',

    responsive: {
      0: {
        items: 3,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 6,
      },
    },
    nav: false,
  };
  slides = [
    { img: './logo-acme.png' },
    { img: './logo-apex.png' },
    { img: './logo-celestial.png' },
    { img: './logo-echo.png' },
    { img: './logo-pulse.png' },
    { img: './logo-quantum.png' },
  ];
}
