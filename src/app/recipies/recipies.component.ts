import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

  currentRecipe: Recipe;

  showActiveRecipe(recipe) {
    this.currentRecipe = recipe;
  }

  constructor() { }

  ngOnInit() {
  }

}
