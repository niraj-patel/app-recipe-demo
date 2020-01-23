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

  constructor(private router: Router, private dataService: RecipeService) {
  }

  ngOnInit() {
    this.recipeList = this.favouriteList;
  }

  onSearch(value) {
      this.recipeList = (value.length > 0) ? this.dataService.recipeList.filter((recipe) => {
        return recipe.name.toLowerCase().includes(value.toLowerCase());
      }) : this.recipeList = this.favouriteList;
      this.labelTitle = (value.length === 0) ? 'Favourites' : 'Search results for "' + value + '"';
  }

}
