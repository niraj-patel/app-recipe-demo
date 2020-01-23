import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { AllRecipeComponent } from './components/all-recipe/all-recipe.component';
import { RecipeCellComponent } from './components/recipe-cell/recipe-cell.component';
import { resolve } from 'url';
import { RecipeResolveService } from './services/recipe-resolve.service';
import { AuthGuardService } from './services/auth-guard.service';
import {PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: RecipeListComponent},
  {path: 'home', component: RecipeListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-recipe', component: NewRecipeComponent, canActivate: [AuthGuardService]},
  {path: 'all-recipes', component: AllRecipeComponent, children: [
    { path: ':id', component: RecipeCellComponent, resolve: { id: RecipeResolveService } }
  ]},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RecipeResolveService]
})
export class AppRoutingModule { }
