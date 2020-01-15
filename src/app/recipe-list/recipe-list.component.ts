import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../data.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Input() recipeList: any = [];
  @Output() onChangeView = new EventEmitter();
  constructor(private router: Router, private dataService: RecipeService) {
  }

  ngOnInit() {
    this.recipeList = this.dataService.recipeList
  }

  onAddNewButtonClick() {
    this.router.navigate(['add-recipe']);
  }

}
