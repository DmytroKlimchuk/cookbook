import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model';
import { Shopping } from '../../shopping/shopping.model';

import { ShoppingService } from '../../shopping/shopping.service';
import { RecipesService } from '../recipes.service';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import {Router} from '@angular/router';


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;
  id: number;
  nameIngredient: string;
  amount: number;

  private subscriptionId: Subscription;

  constructor(private ShoppingService: ShoppingService, private RecipesService: RecipesService, private route: ActivatedRoute, private router: Router) {
    this.subscriptionId = route.params.subscribe((params) => {
      this.id = params['id'];
      this.recipe = RecipesService.getRecipeById(this.id);
    });
  }

  ngOnInit() {
  }

  removeIngredient(item) {
    this.recipe.ingredients.splice(this.recipe.ingredients.indexOf(item), 1);
  }

  addIngredient() {
      const item = new Shopping(this.nameIngredient, this.amount);
      this.recipe.ingredients.push(item);
  }

  saveRecipe() {
    this.RecipesService.edit(this.id, this.recipe);
    this.router.navigate(['recipes']);
  }


}
