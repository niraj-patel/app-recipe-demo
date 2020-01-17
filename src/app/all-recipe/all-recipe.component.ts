import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss']
})
export class AllRecipeComponent implements OnInit {

  recipeList = this.dataService.recipeList;

  constructor(private dataService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(value => {
      console.log(value)
    })
  }

  showRecipeDetail() {
    this.router.navigate(['/all-recipes'], { queryParams: { id: '1' } });
  }
}
