import {Component} from 'angular2/core';
import {Food} from './food';

@Component({
  selector: 'food-list',
  template:
  `
  <div class="food-list" *ngFor="#food of foods">
    <h3>
    {{food.name}}
    </h3>
  </div>
  `
})

export class FoodListComponent {
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food("Hamburger", "Love it!", 300, 0),
      new Food("Salad", "Love it!", 300, 1),
      new Food("Fries", "Love it!", 300, 2),
      new Food("Smoothie", "Love it!", 300, 3)
    ];
  }
}
