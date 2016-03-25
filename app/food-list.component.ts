import {Component} from 'angular2/core';
import {Food} from './food';
import {NewFoodComponent} from './new-food.component';

@Component({
  selector: 'food-list',
  directives: [NewFoodComponent],
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
  `
})

export class FoodListComponent {
  public foods: Food[];
  public selectedFood: Food;
  constructor() {
    this.foods = [
      new Food("Hamburger", "Love it!", 300, 0),
      new Food("Salad", "Love it!", 300, 1),
      new Food("Fries", "Love it!", 300, 2),
      new Food("Smoothie", "Love it!", 300, 3)
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
