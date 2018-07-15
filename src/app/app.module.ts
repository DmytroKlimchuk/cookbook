import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';

import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { RecipesService } from './recipies/recipes.service';

import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { ShoppingFormComponent } from './shopping/shopping-form/shopping-form.component';
import { ShoppingService } from './shopping/shopping.service';

import { AppRoutingModule, routerComponents } from './app-router.module';


@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    NavigationComponent,
    ShoppingFormComponent,
    ...routerComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [RecipesService, ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
