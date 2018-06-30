import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipes.model';
import { Ingredient } from '../../shopping-list/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {

  @Output('showActiveRecipe') showActiveRecipe = new EventEmitter();

  recipes: Recipe[] = [
    new Recipe('Recipe title 1', 'Recipe description 1', 'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit-1500x1125.jpg', new Ingredient('мясо', 250), new Ingredient('сіль', 50), new Ingredient('картопля', 150 )),
    new Recipe('Recipe title 4', 'Recipe description 4', 'https://www.seriouseats.com/recipes/images/2017/03/Stir_Fried_Lo_Mein_20170315_3-edit-1500x1125.jpg', new Ingredient('мука', 230), new Ingredient('помідор', 130)),
    new Recipe('Recipe title 2', 'Recipe description description description description 2', 'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis', new Ingredient('сосиски', 190), new Ingredient('картопля', 300)),
    new Recipe('Recipe title 5', 'Recipe description description description description 5', 'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=KPTNrvis', new Ingredient('сир', 200), new Ingredient('помідор', 150), new Ingredient('мука', 100)),
    new Recipe('Recipe title 3', 'Recipe description description 3', 'http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/skillet-chicken-roasted-potatoes-carrots-ck.jpg?itok=dzdpIO4s', new Ingredient('мука', 170), new Ingredient('мясо', 230), new Ingredient('сіль', 30), new Ingredient('помідор', 110))
  ];

  setActiveRecipe(recipe) {
    console.log(recipe);
    this.showActiveRecipe.emit(recipe);
  }


  constructor() { }

  ngOnInit() {
  }

}
