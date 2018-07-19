import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../../common.service';
import { Recipe } from '../../recipies/recipes.model';
import { RecipesService } from '../../recipies/recipes.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  recipes: Recipe[];

  constructor(private newService: CommonService, private RecipesService: RecipesService) { }

  ngOnInit() {

  }

  onSave() {
    this.recipes = this.RecipesService.getRecipes();
    this.newService.addRecipe(this.recipes);
  }

  onFetch() {

    this.newService.GetRecipes()
    .subscribe(
      (recipes: Recipe[]) => {
        this.RecipesService.setRecipes(recipes);
      }
    );

  }

}
