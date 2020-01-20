import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { RecipeCellComponent } from './recipe-cell/recipe-cell.component';
import { resolve } from 'url';
import { RecipeResolveService } from './recipe-resolve.service';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = [
  {path: '', component: RecipeListComponent},
  {path: 'home', component: RecipeListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-recipe', component: NewRecipeComponent, canActivate: [AuthGuardService]},
  {path: 'all-recipes', component: AllRecipeComponent, children: [
    { path: ':id', component: RecipeCellComponent, resolve: { id: RecipeResolveService } }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RecipeResolveService]
})
export class AppRoutingModule { }
