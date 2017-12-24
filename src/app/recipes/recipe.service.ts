import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe("Dummy name", "Dummy description", "https://c1.staticflickr.com/5/4149/4962298166_e8fca691a5_b.jpg"),
        new Recipe("Dummy name 2", "Dummy description 2", "https://c1.staticflickr.com/5/4149/4962298166_e8fca691a5_b.jpg")    
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}