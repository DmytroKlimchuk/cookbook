import { Component, OnInit } from '@angular/core';
import {Ingredient} from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
   new Ingredient('Сир', 100),
   new Ingredient('Мука', 200),
   new Ingredient('Помідор', 120)
  ];


  constructor() { }

  ngOnInit() {
  }

}