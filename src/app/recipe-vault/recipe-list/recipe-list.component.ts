import { Component, OnInit } from '@angular/core';

import  {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[]  = [
   new Recipe('Test Recipe','this is simply at test','http://3olj7vg0kmp1zz2i82eav8b5-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/Snows-BBQ-01-1024x717.jpg')
 ];
  constructor() { }

  ngOnInit() {
  }

}
