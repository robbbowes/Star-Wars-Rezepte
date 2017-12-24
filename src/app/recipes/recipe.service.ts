import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
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

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}