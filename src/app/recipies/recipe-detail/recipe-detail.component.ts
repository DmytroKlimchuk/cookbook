import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { ShoppingService } from '../../shopping/shopping.service';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private ShoppingService: ShoppingService, private RecipesService: RecipesService) { }

  ngOnInit() {
  }

  addToShoppingList() {
    this.ShoppingService.add(...this.recipe.ingredients);
  }

  removeRecipe(value) {
    this.RecipesService.remove(value);
  }

}
