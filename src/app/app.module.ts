import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { TheNavbarComponent } from './header-nav/the-navbar/the-navbar.component';
import { RecipeVaultComponent } from './recipe-vault/recipe-vault.component';
import { RecipeListComponent } from './recipe-vault/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-vault/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './recipe-vault/recipe-detail/recipe-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    TheNavbarComponent,
    RecipeVaultComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailComponent,
     ],
  imports: [
    BrowserModule, NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
