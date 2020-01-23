import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/data.service';

@Component({
  selector: 'app-recipe-cell',
  templateUrl: './recipe-cell.component.html',
  styleUrls: ['./recipe-cell.component.scss']
})

export class RecipeCellComponent {
@Input() recipe: Recipe;

  constructor(private dataService: RecipeService) { }

  onFavouriteClick() {
    this.dataService.recipeList = this.dataService.recipeList.filter((recipe) => {
      if (recipe.recipeId === this.recipe.recipeId) {
        recipe.isFavourite = !recipe.isFavourite;
        this.recipe.isFavourite = recipe.isFavourite;
      }
      return recipe;
    });
  }
}
