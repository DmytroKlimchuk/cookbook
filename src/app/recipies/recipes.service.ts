import { EventEmitter } from '@angular/core';

import { Recipe } from './recipes.model';
import { recipes } from './data';


export class RecipesService {

  getRecipe = new EventEmitter<Recipe>();
  recipesChanged = new EventEmitter();

  private recipes: Recipe[] = recipes;

  getRecipes(): Recipe[] {
      return this.recipes.slice();
  }

  setRecipes(value: Recipe[]) {
    this.recipes = value;
  }

  getRecipeById(id) {
    return this.recipes.filter((item) => {
      return item.id == id;
    })[0];
  }

  remove(remove) {
    console.log(remove.id);

    this.recipes = this.recipes.filter((item) => {
      return item.id !== remove.id;
    });

    this.recipesChanged.emit(this.recipes);

    console.log(this.recipes);
  }

  edit(item) {
    this.recipes = this.recipes.filter((recipe) => recipe.id != item.id);
    this.recipes.push(item);
    this.recipesChanged.emit(this.recipes);
  }

  add(item) {
    this.recipes.push(item);
    this.recipesChanged.emit(this.recipes);
  }

}
