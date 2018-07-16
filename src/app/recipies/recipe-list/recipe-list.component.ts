import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';
import {CommonService} from '../../common.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  Repdata;

  constructor(public RecipesService: RecipesService, private newService: CommonService) {
    this.recipes = [];
   }

  ngOnInit() {
    this.recipes = this.RecipesService.getRecipes();

    this.RecipesService.recipesChanged.subscribe((data: Recipe[]) => {
      this.recipes = data;
    });

    this.newService.GetRecipes().subscribe(data =>  this.Repdata = data);
    console.log(this.Repdata);

    if ( typeof this.Repdata === 'undefined') {
        this.save(this.recipes);
    }

  }

  onSelectRecipe(recipe) {
    this.RecipesService.getRecipe.emit(recipe);
  }

  save(item) {
    this.newService.addRecipe(item);
  }
}
