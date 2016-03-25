import {Component} from 'angular2/core';
import {Food} from './food';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template:
  `
  <div class="edit-food-details">
    <input [(ngModel)]="food.details" class="col-sm-4 input-sm" type="text">
  </div>

  `
})

export class EditFoodDetailsComponent {
  public food: Food;
}
