import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(public RecipesService: RecipesService) {
    this.recipes = [];
   }

  ngOnInit() {
    this.recipes = this.RecipesService.getRecipes();
  }

  onSelectRecipe(recipe) {
    this.RecipesService.getRecipe.emit(recipe);
  }

}
