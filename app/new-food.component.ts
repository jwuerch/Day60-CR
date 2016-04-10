import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template:
  `
  <div class="add-food">
    <form>
      <h5>Enter in new food name</h5>
      <input class="col-sm-5" #newFoodName>
      <br>
      <h5>Enter in new food calories</h5>
      <input class="col-sm-5" #newFoodCalories>
      <br>
      <h5>Enter in new food details</h5>
      <input class="col-sm-5" #newFoodDetails>
      <br>
      <br>
      <button (click)="addFood(newFood)">Add New Food</button>
    </form>
  </div>
  `
})

export class NewFoodComponent {
  public food: Food;
  public onSubmitNewFood: EventEmitter<string>;
  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(foodName: HTMLInputElement) {
    this.onSubmitNewFood.emit(foodName.value);
    foodName.value = "";
  }
}
