import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingFormComponent } from './shopping/shopping-form/shopping-form.component';

import { RecipesService } from './recipies/recipes.service';
import { ShoppingService } from './shopping/shopping.service';

const routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipiesComponent},
  {path: 'shopping-list', component: ShoppingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RecipiesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    NavigationComponent,
    ShoppingComponent,
    ShoppingFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RecipesService, ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
