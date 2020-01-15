import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { LoggerService } from './logger.service';
import { RecipeService } from './data.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    NewRecipeComponent,
    HighlightDirective,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
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
