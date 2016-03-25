import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template:
  `
  <div class="add-food">
  <input class="col-sm-5" #newFood>
  <button (click)="addFood(newFood)"></button>
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
