import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RecipeService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html'
})

export class NewRecipeComponent {
  form: FormGroup;

  constructor(formBuilder: FormBuilder, private dataService: RecipeService, private router: Router) {
    this.form = formBuilder.group({
      "name": ["", Validators.required],
      "chef": ["", Validators.required],
      "image": ["", Validators.required],
      "type": ["", Validators.required],
    });
  }

  onSumbit() {
    this.dataService.addRecipe(this.form.value);
    this.router.navigate(['']);
  }

  onCancelClick() {
    this.router.navigate(['']);
  }
}
