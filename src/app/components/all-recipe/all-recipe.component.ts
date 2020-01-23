import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss']
})
export class AllRecipeComponent implements OnInit {

  recipeList = this.dataService.recipeList;
  recipe = this.dataService.recipeList[0];

  constructor(private dataService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  showRecipeDetail(value) {
    this.recipe = value;
    this.router.navigate(['/all-recipes'], { queryParams: { id: value.recipeId } });
  }
}
