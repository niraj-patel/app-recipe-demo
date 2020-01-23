import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from './services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'recipe-app';
  recipeList = [];

  constructor(private dataService: RecipeService) { }

  ngOnInit() {
    this.recipeList = this.dataService.recipeList;
  }
}
