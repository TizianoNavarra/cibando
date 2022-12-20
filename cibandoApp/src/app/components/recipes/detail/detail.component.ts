import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  ricetta: Recipe; // variabile
  percorsoStelline = "../../../../assets/images/difficolta-";

  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute,
              private router: Router
             ) {
  }

  ngOnInit(): void {
    this.onGetRecipe();
  }

  // metodo che recupera l'id dall'url
  onGetRecipe(): void {

    // .activatedrout = si ricava il percorso assoluto o relativo
    //.snapshot = cattura la url
    //.paramMap.get gli passi la variabile che va a fare il match con il path dell'app-routing.module.ts
    const id = Number(this.activatedRoute.snapshot.paramMap.get('_id'));

    // res ed err sono due variabili casuali
    this.recipeService.getRecipe(id).subscribe({
      next: (res) => {
        this.ricetta = res;
      },
      error: (err) => console.log(err)
    })
  }
}
