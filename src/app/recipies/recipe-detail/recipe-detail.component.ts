import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../recipes.model';
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

  constructor(private ShoppingService: ShoppingService, private RecipesService: RecipesService, private route: ActivatedRoute, private router: Router) {

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
    this.router.navigate(['recipes']);
  }

}
