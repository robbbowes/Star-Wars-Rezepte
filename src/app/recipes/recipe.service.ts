import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();  

  private recipes: Recipe[] = [
    new Recipe(
        "Burger", 
        "Burger and chips", 
        "https://c1.staticflickr.com/9/8391/8536012416_4c45fcb4ca_z.jpg",
        [
            new Ingredient('Meat', 1),
            new Ingredient('Breadbun', 1),
            new Ingredient('Chips', 15)
        ]),
    new Recipe(
        "Cakes", 
        "Cakes x2", 
        "https://c1.staticflickr.com/5/4149/4962298166_e8fca691a5_b.jpg",
        [
            new Ingredient('Cake', 2),
            new Ingredient('Icing', 2)
        ])    
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}