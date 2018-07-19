import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  recipeForm: FormGroup;

  errorMessage = '';

  constructor(public RecipesService: RecipesService, public router: Router) {}


  ngOnInit() {

    this.recipeForm = new FormGroup ({
      'name': new FormControl ('', Validators.required),
      'description':  new FormControl ('', Validators.required),
      'imgPath':  new FormControl ('', Validators.required),
      'nameIngredient':  new FormControl ('', Validators.required),
      'amount':  new FormControl ('', [ Validators.required, Validators.pattern('\\d+') ])
    });

  }

  addIngredient(name: HTMLInputElement, count: HTMLInputElement) {
    const item = new Shopping(name.value, +count.value);
    this.ingredients.push(item);
  }

  removeIngredient(item) {
    this.ingredients.splice(this.ingredients.indexOf(item), 1);
  }

  addRecipe() {
    this.recipes = this.RecipesService.getRecipes();
    const id = this.recipes.length;
    console.log(this.recipeForm.value);

    this.recipe = new Recipe(
      id,
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imgPath,
      ...this.ingredients
    );

    console.log(this.recipe);
    this.RecipesService.add(this.recipe);

    this.router.navigate(['recipes', id]);
  }
}
