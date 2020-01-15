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

  constructor(private router: Router, private dataService: RecipeService, private authService: AuthService) {
  }

  ngOnInit() {
    this.recipeList = this.dataService.recipeList;
    console.log(this.authService.authenticate());
  }

  onAddNewButtonClick() {
    console.log(this.authService.authenticate())
    if (this.authService.authenticate()) {
      this.router.navigate(['add-recipe']);
    } else {
      this.router.navigate(['login']);
    }
  }

}
