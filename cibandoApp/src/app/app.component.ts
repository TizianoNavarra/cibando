import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cibandoApp';
  pippo = false;

  evidenziato = false;

  onEvidenziato() {
    this.evidenziato = !this.evidenziato
  }

}
