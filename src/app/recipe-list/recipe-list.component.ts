import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Input() recipeList: any = [];
  @Output() onChangeView = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  onAddNewButtonClick() {
    this.onChangeView.emit(false);
  }

}
