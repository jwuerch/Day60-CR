import {Component} from 'angular2/core';
import {Food} from './food';
import {NewFoodComponent} from './new-food.component';
import {EditFoodNameComponent} from './edit-food-name.component';

@Component({
  selector: 'food-list',
  directives: [NewFoodComponent, EditFoodNameComponent],
  template:
  `
  <div class="food-list" *ngFor="#currentFood of foods">
    <h3
    (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood">
      {{currentFood.name}}
    </h3>
  </div>
  <br>
  <br>
  <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  <br>
  <br>
  <edit-food-name *ngIf="selectedFood" [food]="selectedFood">
  </edit-food-name>
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
}
