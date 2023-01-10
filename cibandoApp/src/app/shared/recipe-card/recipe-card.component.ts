import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {
  @Input() recipes: Recipe[]; // @ = decoratore - variabile di tipo input che può ricevere dati dal padre (recipe component)
  @Output() messaggio = new EventEmitter // la variabile è un emettitore di eventi

  inviaMessaggio(titolo: String) {
    this.messaggio.emit(titolo);
  }
}
