import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/data.service';

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
  showNoResult = false;

  constructor(private router: Router, private dataService: RecipeService) {
  }

  ngOnInit() {
    this.recipeList = this.favouriteList;
  }

  onSearch(value) {
    if (value.length > 0) {
      this.recipeList = this.dataService.recipeList.filter((recipe) => {
        return recipe.name.toLowerCase().includes(value.toLowerCase());
      });
      this.labelTitle = 'Search results for "' + value + '"';
      this.showNoResult = this.recipeList.length === 0;
    } else {
      this.recipeList = this.favouriteList;
      this.labelTitle = 'Favourites';
    }
  }

}
