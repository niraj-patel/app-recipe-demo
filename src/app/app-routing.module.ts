import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';


const routes: Routes = [
  {path: '', component: RecipeListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-recipe', component: NewRecipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
