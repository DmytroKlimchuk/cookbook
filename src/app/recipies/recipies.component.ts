import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {

  recipe: Recipe;

  constructor(private RecipesService: RecipesService) {

  }

  ngOnInit() {

    this.RecipesService.getRecipe.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });

  }


}
