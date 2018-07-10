import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { ShoppingService } from '../../shopping/shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private ShoppingService: ShoppingService) { }

  ngOnInit() {
  }

  addToShoppingList() {
    this.ShoppingService.add(...this.recipe.ingredients);
  }

}
