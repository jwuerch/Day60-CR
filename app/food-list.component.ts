import {Component} from 'angular2/core';
import {Food} from './food';
import {NewFoodComponent} from './new-food.component';
import {DisplayFoodDetailsComponent} from './display-food-details.component';
import {EditFoodDetailsComponent} from './edit-food-details.component';
import {DisplayFoodHealthyComponent} from './display-food-healthy.component';
import {HealthyPipe} from './healthy.pipe';

@Component({
  selector: 'food-list',
  directives: [NewFoodComponent, DisplayFoodHealthyComponent, DisplayFoodDetailsComponent, EditFoodDetailsComponent],
  pipes: [HealthyPipe],
  template:
  `
  <div class="row">
    <div class="col-sm-6">
      <select (change)="onChange($event.target.value)">
        <option value="all" selected="selected">View all foods</option>
        <option value="notHealthy">View unhealthy foods under 300 calories</option>
        <option value="healthy">View healthy foods over 300 calories</option>
      </select>
      <br>

      <div class="food-list" *ngFor="#currentFood of foods | healthy:filterHealthy"
      (click)="foodClicked(currentFood)"
      [class.selected]="currentFood === selectedFood">
        <h3>{{currentFood.name}}</h3>
      </div>
      <br>
      <display-food-details *ngIf="selectedFood" [fakeFood]="selectedFood"></display-food-details>
      <br>
      <br>
      <display-food-healthy *ngIf="selectedFood" [food]="selectedFood"></display-food-healthy>
      <edit-food-name *ngIf="selectedFood" [food]="selectedFood"></edit-food-name>
      <br>
      <br>
      <edit-food-details *ngIf="selectedFood" [food]="selectedFood"></edit-food-details>
      <br>
      <br>
      <edit-food-calories *ngIf="selectedFood" [food]="selectedFood"></edit-food-calories>
      <br>
      <button (click)="deleteFood(selectedFood)">Delete This Food</button>
    </div>
    <div class="col-sm-6">
      <new-food (onSubmitNewFood)="createFood($event)"></new-food>
    </div>
  </div>

  `
})

export class FoodListComponent {
  public foods: Food[];
  public selectedFood: Food;
  public filterHealthy: string = "all";
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
  createFood(newFood: Food): void {
    this.foods.push(
      new Food(newFood.name, newFood.details, newFood.calories, this.foods.length)
    )
  }
  onChange(filterOption) {
    this.filterHealthy = filterOption;
  }
  deleteFood(food: Food) {
    var newArr = [];
    for ( var i = 0; i < this.foods.length; i++) {
      if (this.foods[i] !== food) {
        newArr.push(this.foods[i]);
      }
    }
    this.foods = newArr;
  }
}
