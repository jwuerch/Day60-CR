import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food';

@Component({
  selector: 'delete-food',
  outputs: ['onSubmitDeleteFood'],
  inputs: ['food'],
  template:
  `
  <button (click)="selectDeleteFood(food)">Delete This Food</button>
  `
})

export class DeleteFoodComponent {
  public food: Food;
  public onSubmitDeleteFood: EventEmitter<string>;
  constructor() {
    this.onSubmitDeleteFood = new EventEmitter();
  }
  selectDeleteFood(food: HTMLInputElement) {
    this.onSubmitDeleteFood.emit(food.value);
  }
}
