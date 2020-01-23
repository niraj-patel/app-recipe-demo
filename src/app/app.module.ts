import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { LoginComponent } from './components/login/login.component';
import { LoggerService } from './services/logger.service';
import { RecipeService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AllRecipeComponent } from './components/all-recipe/all-recipe.component';
import { RecipeCellComponent } from './components/recipe-cell/recipe-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    NewRecipeComponent,
    HighlightDirective,
    LoginComponent,
    AllRecipeComponent,
    RecipeCellComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    LoggerService,
    RecipeService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
