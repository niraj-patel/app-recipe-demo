import { Component, Input, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';
import { RecipeService } from './data.service';
import { Recipe } from './recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'recipe-app';
  recipeList = [];

  constructor(private logger: LoggerService, private dataService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.recipeList = this.dataService.recipeList;
  }
}
