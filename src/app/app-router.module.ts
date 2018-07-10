import {RouterModule, Routes} from '@angular/router';

import { ShoppingComponent } from './shopping/shopping.component';
import { RecipiesComponent } from './recipies/recipies.component';

import { NgModule } from '@angular/core';


const appRouter: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipiesComponent },
  { path: 'recipes/:id', component: RecipiesComponent },
  { path: 'shopping-list', component: ShoppingComponent }
];

export const routerComponents = [
  RecipiesComponent,
  ShoppingComponent
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
