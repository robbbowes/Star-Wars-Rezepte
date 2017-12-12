import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("Dummy name", "Dummy description", "https://c1.staticflickr.com/5/4149/4962298166_e8fca691a5_b.jpg"),
    new Recipe("Dummy name 2", "Dummy description 2", "https://c1.staticflickr.com/5/4149/4962298166_e8fca691a5_b.jpg")    
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
