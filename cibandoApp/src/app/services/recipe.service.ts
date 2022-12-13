import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RECIPES } from '../mocks/recipe.mock'; // lo importiamo solamente perche non abbiamo la base Dati ma solo un mock
import { Observable, observable, of } from 'rxjs'; // of viene utilizzato solamente con i file mock - con il server nn serve

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  // ritorna in modo Asincrono un array di Recipe
  // observable serve per trasformare la funzione in una funzione asincrona
  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES); // utiliziamo of perche ritorna un mock
  }

}
