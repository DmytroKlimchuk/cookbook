import {RouterModule, Routes} from '@angular/router';

import { ShoppingComponent } from './shopping/shopping.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipies/recipe-edit/recipe-edit.component';
import { RecipeAddComponent } from './recipies/recipe-add/recipe-add.component';

import { NgModule } from '@angular/core';

const detailRoute: Routes = [
  { path: ':id', component: RecipeDetailComponent }
];

const appRouter: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipiesComponent },
  { path: 'recipes', component: RecipiesComponent, children: detailRoute },
  { path: 'shopping-list', component: ShoppingComponent },
  { path: 'recipe-edit/:id', component:  RecipeEditComponent},
  { path: 'recipe-add', component:  RecipeAddComponent}
];

export const routerComponents = [
  RecipiesComponent,
  ShoppingComponent,
  RecipeDetailComponent,
  RecipeEditComponent,
  RecipeAddComponent
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRouter)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
