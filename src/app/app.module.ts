import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EditRecipeVaultComponent } from './recipevault/edit-recipe-vault/edit-recipe-vault.component';
import { RecipevaultComponent } from './recipevault/recipevault/recipevault.component';
import { ShopListComponent } from './shoplist/shop-list/shop-list.component';
import { ShoplistEditComponent } from './shoplist/shoplist-edit/shoplist-edit.component';
import { IngredientInfoComponent } from './shoplist/ingredient-info/ingredient-info.component';
import { TheNavbarComponent } from './header-nav/the-navbar/the-navbar.component';
import { RecipeListComponent } from './recipevault/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipevault/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipevault/recipe-list/recipe-item/recipe-item.component';
import { ShopListEditComponent } from './shoplist/shop-list/shop-list-edit/shop-list-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    EditRecipeVaultComponent,
    RecipevaultComponent,
    ShopListComponent,
    IngredientInfoComponent,
    TheNavbarComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShopListEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
