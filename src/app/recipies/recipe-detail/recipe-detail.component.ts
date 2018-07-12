import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { Shopping } from '../../shopping/shopping.model';
import { ShoppingService } from '../../shopping/shopping.service';
import { RecipesService } from '../recipes.service';

import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;
  private subscriptionId: Subscription;

  constructor(private ShoppingService: ShoppingService, private RecipesService: RecipesService, private route: ActivatedRoute) {

    this.subscriptionId = route.params.subscribe((params) => {
      this.id = params['id'];
      this.recipe = RecipesService.getRecipeById(this.id);
    });
  }

  ngOnInit() {
  }

  addToShoppingList() {
    this.ShoppingService.add(...this.recipe.ingredients);
  }

  removeRecipe(value) {
    this.RecipesService.remove(value);
  }

}
