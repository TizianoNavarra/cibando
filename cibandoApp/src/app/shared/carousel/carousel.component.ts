import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  percorso = "../../../assets/images/carousel-";

  //array di oggetti
  images = [
    {
      id: 1,
      titolo: "spaghetti al pomodoro"
    },
    {
      id: 2,
      titolo: "tagliata di manzo"
    },
    {
      id: 3,
      titolo: "tiramisù classico"
    }
  ];


}
