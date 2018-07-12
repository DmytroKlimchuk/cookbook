import {RouterModule, Routes} from '@angular/router';

import { ShoppingComponent } from './shopping/shopping.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipeDetailComponent } from './recipies/recipe-detail/recipe-detail.component';

import { NgModule } from '@angular/core';

const detailRoute: Routes = [
  { path: ':id', component: RecipeDetailComponent }
];

const appRouter: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipiesComponent },
  { path: 'recipes', component: RecipiesComponent, children: detailRoute },
  { path: 'shopping-list', component: ShoppingComponent }
];

export const routerComponents = [
  RecipiesComponent,
  ShoppingComponent,
  RecipeDetailComponent
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
