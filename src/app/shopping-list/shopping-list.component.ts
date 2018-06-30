import { Component, OnInit, Input } from '@angular/core';
import {Ingredient} from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  @Input() ingredients: Ingredient[];

  constructor() { }

  ngOnInit() {
  }

}
