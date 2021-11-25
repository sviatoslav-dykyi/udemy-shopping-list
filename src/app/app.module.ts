import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecipeListComponent } from './recepies/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recepies/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recepies/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BetterHightlightDirective } from './directives-test/better-hightlight.directive';
import { UnlessDirective } from './directives-test/unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeService } from './recepies/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recepies/recipe-start/recipe-start.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BetterHightlightDirective,
    UnlessDirective,
    DropdownDirective,
    RecipeStartComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
