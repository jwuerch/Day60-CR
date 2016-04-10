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
      <input class="col-sm-5" #newName>
      <br>
      <h5>Enter in new food details</h5>
      <input class="col-sm-5" #newDetails>
      <br>
      <h5>Enter in new food calories</h5>
      <input class="col-sm-5" #newCalories>
      <br>
      <br>
      <button (click)="addFood(newName, newDetails, newCalories)">Add New Food</button>
    </form>
  </div>
  `
})

export class NewFoodComponent {
  public food: Food;
  public onSubmitNewFood: EventEmitter<Food>;
  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement) {
    var newFood = new Food(newName.value, newDetails.value, parseInt(newCalories.value), -1);
    this.onSubmitNewFood.emit(newFood);
    newName.value = "";
    newCalories.value = "";
    newDetails.value = "";
  }
}
