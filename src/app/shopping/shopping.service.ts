import { Shopping } from './shopping.model';
import { shopping } from './data';

export class ShoppingService {

  shopping: Shopping[] = shopping;

  getShopping() {
    return this.shopping;
  }

  remove(value) {
   this.shopping.splice(this.shopping.indexOf(value), 1);
  }

  add(item) {
    this.shopping.push(item);
  }

  constructor() { }
}
