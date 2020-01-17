import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Input() recipeList: any = [];

  favouriteList = this.dataService.recipeList.filter((recipe) => {
    return recipe.isFavourite;
  });

  labelTitle = 'Favourites';

  constructor(private router: Router, private dataService: RecipeService, private authService: AuthService) {
  }

  ngOnInit() {
    this.recipeList = this.favouriteList;
  }

  onAddNewButtonClick() {
    if (this.authService.authenticate()) {
      this.router.navigate(['add-recipe']);
    } else {
      this.router.navigate(['login']);
    }
  }

  onAllRecipeClick() {
    this.router.navigate(['all-recipes']);
  }

  onSearch(value) {
      this.recipeList = (value.length > 0) ? this.dataService.recipeList.filter((recipe) => {
        return recipe.name.toLowerCase().includes(value.toLowerCase());
      }) : this.recipeList = this.favouriteList;
      this.labelTitle = (value.length === 0) ? 'Favourites' : 'Search results for "' + value + '"';
  }

}
