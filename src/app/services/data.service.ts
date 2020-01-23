import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { Recipe } from '../models/recipe';

@Injectable()
export class RecipeService {
  recipeList: Recipe[] = [
    {
      recipeId: 1,
      name: 'Burger',
      chef: 'Ranveer Brar',
      image: 'http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg',
      type: 'nv',
      isFavourite: true
    },
    {
      recipeId: 2,
      name: 'Italian Pasta',
      chef: 'JM',
      image: 'https://mariettasquaremarket.com/msm/wp-content/uploads/2018/12/Pita-Mediterranean-5.jpg',
      type: 'v',
      isFavourite: false
    },
    {
      recipeId: 3,
      name: 'Chicken Maggie',
      chef: 'Nisha Madhulika',
      image: 'http://eatbook.sg/wp-content/uploads/2018/06/Century-Square-Food-Two-Hana.jpg',
      type: 'nv',
      isFavourite: true
    },
    {
      recipeId: 4,
      name: 'Veg. Pulav',
      chef: 'Tarla Dalal',
      image: 'https://media-cdn.tripadvisor.com/media/photo-p/0e/75/7b/5d/photo3jpg.jpg',
      type: 'v',
      isFavourite: false
    }
  ];

  constructor(private logger: LoggerService) { }

  addRecipe(newReceipe: Recipe) {
    this.recipeList.push(newReceipe);
  }

  removeRecipe(id: number) {
    this.recipeList = this.recipeList.filter((value) => {
      return value.recipeId !== id;
    });
  }

}
