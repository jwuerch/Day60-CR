import {Component} from 'angular2/core';
import {Food} from './food';

@Component({
  selector: 'display-food-details',
  inputs: ['food'],
  template:
  `
  <div class="display-food-details">
    <p>Details: {{food.details}}</p>
    <p>Calories: {{food.calories}}</p>
  </div>

  `
})

export class DisplayFoodDetailsComponent {
  public food: Food;
}
