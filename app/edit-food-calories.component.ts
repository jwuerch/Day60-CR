import {Component} from 'angular2/core';
import {Food} from './food';

@Component({
  selector: 'edit-food-calories',
  inputs: ['food'],
  template:
  `
  <div class="edit-food-calories">
    <h5>Edit Food Calories</h5>
    <input [(ngModel)]="food.calories" type="number" class="input-sm col-sm-4">
  </div>
  `
})

export class EditFoodCaloriesComponent {
  public food: Food;
}
