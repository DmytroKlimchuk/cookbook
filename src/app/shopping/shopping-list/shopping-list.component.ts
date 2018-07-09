import { Component, OnInit } from '@angular/core';

import { ShoppingService } from '../shopping.service';
import { Shopping } from '../shopping.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shopping: Shopping[];

  constructor(public ShoppingService: ShoppingService) {
    this.shopping = [];
  }

  ngOnInit() {
    this.shopping = this.ShoppingService.getShopping();
  }

  remove(value) {
    this.ShoppingService.remove(value);
  }

}
