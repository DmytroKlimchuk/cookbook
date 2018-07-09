import { EventEmitter } from '@angular/core';

import { Recipe } from './recipes.model';
import { recipes } from './data';

export class RecipesService {

  getRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = recipes;

  getRecipes(): Recipe[] {
      return this.recipes.slice();
  }

}
