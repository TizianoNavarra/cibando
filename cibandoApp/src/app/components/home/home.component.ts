import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pippo = false;

  evidenziato = false;

  onEvidenziato() {
    this.evidenziato = !this.evidenziato
  }

}



