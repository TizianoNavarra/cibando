import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importiamo i componenti pagina per il ruoting
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, // per convienzione all'inizio si iserisce la path per ritornare alla home
  { path: 'home', component: HomeComponent}, // ciò che scriviamo nel path è quello che viene visualizzato nella url della pagina
  { path: 'ricette', component: RecipesComponent, children: [
    { path: '', pathMatch: 'full', component: RecipesListComponent},
    { path: 'dettaglio/:title/:_id', component: DetailComponent} // _id è il nome della variabile (casuale)
  ]},
  {path: '**', redirectTo: 'home'} // percorso di emergenza quando una risorsa viene a mancare
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
