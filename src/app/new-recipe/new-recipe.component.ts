import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {
  form: FormGroup;
  @Output() onNewRecipeFormSubmitted = new EventEmitter();

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      "name": ["", Validators.required],
      "chef": ["", Validators.required],
      "image": ["", Validators.required],
      "type": ["", Validators.required],
    });
  }

  ngOnInit() {
  }

  onSumbit() {
    this.onNewRecipeFormSubmitted.emit(this.form.value);
  }

}
