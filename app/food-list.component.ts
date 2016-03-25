import {Component} from 'angular2/core';
import {Food} from './food';
import {NewFoodComponent} from './new-food.component';
import {EditFoodNameComponent} from './edit-food-name.component';
import {DisplayFoodDetailsComponent} from './display-food-details.component';
import {EditFoodDetailsComponent} from './edit-food-details.component';
import {EditFoodCaloriesComponent} from './edit-food-calories.component';
import {FoodDisplayComponent} from './food-display.component';

@Component({
  selector: 'food-list',
  directives: [NewFoodComponent, FoodDisplayComponent, EditFoodNameComponent, DisplayFoodDetailsComponent, EditFoodDetailsComponent, EditFoodCaloriesComponent],
  template:
  `
  <select>
    <option value="all">View all foods</option>
    <option value="unhealthy-over-300">View unhealthy foods over 300 calories</option>
    <option value="healthy-under-300">View Healthy foods under 300 calories</option>
  </select>
  <br>

  <task-display class="food-list" *ngFor="#currentFood of foods"
  (click)="foodClicked(currentFood)"
  [food]="currentFood"
  [class.selected]="currentFood === selectedFood">
    <h3>{{currentFood.name}}</h3>
  </task-display>
  <display-food-details *ngIf="selectedFood" [food]="selectedFood"></display-food-details>
  <br>
  <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  <br>
  <br>
  <edit-food-name *ngIf="selectedFood" [food]="selectedFood"></edit-food-name>
  <br>
  <br>
  <edit-food-details *ngIf="selectedFood" [food]="selectedFood"></edit-food-details>
  <br>
  <br>
  <edit-food-calories *ngIf="selectedFood" [food]="selectedFood"></edit-food-calories>
  `
})

export class FoodListComponent {
  public foods: Food[];
  public selectedFood: Food;
  constructor() {
    this.foods = [
      new Food("Hamburger", "Love it!", 300, 0),
      new Food("Salad", "Love it More!!", 259, 1),
      new Food("Fries", "Love it!", 222, 2),
      new Food("Smoothie", "Love it!", 333, 3)
    ];
  }

  foodClicked(clickedFood: Food): void {
    this.selectedFood = clickedFood;
  }
  createFood(foodName: string) {
    this.foods.push(
      new Food(foodName, "Details", 0, this.foods.length)
    )
  }
  toggleHealthy(setHealthy: Boolean) {
    this.food.healthy = setHealthy;
  }
}
