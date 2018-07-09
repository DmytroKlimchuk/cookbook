import { Component, OnInit } from '@angular/core';

import { Shopping } from '../shopping.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent implements OnInit {

  name: string;
  amount: number;

  constructor(public ShoppingService: ShoppingService) { }

  ngOnInit() {
  }

  add() {
    const item = new Shopping(this.name, this.amount);
    this.ShoppingService.add(item);
  }

}
