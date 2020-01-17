import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-cell',
  templateUrl: './recipe-cell.component.html',
  styleUrls: ['./recipe-cell.component.scss']
})

export class RecipeCellComponent implements OnInit {
// @Input() recipe: Recipe;

  constructor(private route: ActivatedRoute) {
    // console.log(this.route.snapshot.data);
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    // this.route.params.subscribe(params => console.log(params));
    console.log("in cell");
  }

}
