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
    this.recipesChanged.emit(this.recipes);
  }

  getRecipeById(index) {
    return this.recipes[index];
  }

  remove(remove) {
    console.log(remove.id);

    this.recipes = this.recipes.filter((item) => {
      return item.id !== remove.id;
    });

    this.recipesChanged.emit(this.recipes);

    console.log(this.recipes);

  }

  edit(index, item) {
    this.recipes[index] = item;
    this.recipesChanged.emit(this.recipes);
  }

  add(item) {
    this.recipes.push(item);
    this.recipesChanged.emit(this.recipes);
  }

}
