import { EventEmitter } from '@angular/core';
import { Shopping } from './shopping.model';
import { shopping } from './data';

export class ShoppingService {

  shopping: Shopping[] = shopping;
  shoppingChanged = new EventEmitter();

  getShopping() {
    return this.shopping;
  }

  remove(value) {
   this.shopping.splice(this.shopping.indexOf(value), 1);
  }

  add(...item) {
    this.shopping.push(...item);
    this.shoppingChanged.emit(this.shopping.slice());
  }

  constructor() { }
}
