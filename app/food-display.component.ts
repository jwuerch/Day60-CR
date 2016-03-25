import {Component} from 'angular2/core';
import {Food} from './food';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template:
  `
  `
})

export class FoodDisplayComponent {
  public food: Food;
  toggleHealthy(setHealthy: boolean) {
    this.food.healthy = setHealthy;
  }
}
