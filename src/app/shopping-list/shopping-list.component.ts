import { Component, OnInit } from '@angular/core';

import {Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 ingredients: Ingredient[] = [
   new Ingredient('Chicken Wings', 20), 
   new Ingredient('Tums', 500)
 ]; 
  constructor() { }

  ngOnInit() {
  }

}
