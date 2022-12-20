import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit{

  //DICHIARAZIONE DELLE VARIABILI:
  ricette: Recipe[];

  // i servizi devono essere inseriti nel costruttore
  // le variabili dichiarate private possono essere utilizzate solo all'interno del file .ts e non in .html e .scss
  constructor(private recipeService: RecipeService) {
  }

  //LifeCycle hook
   // .subscribe() --> sottoscrizione al servizio recipes (dichiarato Observable)
  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next: (res) => {  // la variabile res possiamo chiamarla-scriverla in qualsiasi modo
        this.ricette = res;
      },
      error: (err) => { // la variabile err possiamo chiamarla-scriverla in qualsiasi modo
        console.log(err)
      }
    })
  }
}
