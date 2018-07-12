import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Recipe } from '../recipes.model';
import { Shopping } from '../../shopping/shopping.model';

import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  recipe: Recipe;
  recipes: Recipe[];
  ingredients: Shopping[] = [];

  name = '';
  description = '';
  imgPath = '';

  nameIngredient: string;
  amount: number;

  constructor(public RecipesService: RecipesService, public router: Router) {}


  ngOnInit() {
  }

  addIngredient() {
    const item = new Shopping(this.nameIngredient, this.amount);
    this.ingredients.push(item);
  }

  removeIngredient(item) {
    this.ingredients.splice(this.ingredients.indexOf(item), 1);
  }

  addRecipe() {
    this.recipes = this.RecipesService.getRecipes();
    const id = this.recipes.length + 1;

    this.recipe = new Recipe(id, this.name, this.description, this.imgPath, ...this.ingredients);

    this.RecipesService.add(this.recipe);
    this.router.navigate(['recipes']);
  }
}
