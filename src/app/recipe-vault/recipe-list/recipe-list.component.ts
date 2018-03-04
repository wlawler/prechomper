import { Component, OnInit } from '@angular/core';

import  {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[]  = [
   new Recipe('Test Recipe','this is simply at test','https://qtrip.files.wordpress.com/2012/06/july-7-021.jpg')
 ];
  constructor() { }

  ngOnInit() {
  }

}
