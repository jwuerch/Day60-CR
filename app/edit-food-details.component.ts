import {Component} from 'angular2/core';
import {Food} from './food';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template:
  `
  <div class="edit-food-details">
    <h5>Change Food Name</h5>
    <input [(ngModel)]="food.name" class="col-sm-4 input-sm" type="text">
    <br>
    <h5>Change Food Details:</h5>
    <input [(ngModel)]="food.details" class="col-sm-4 input-sm" type="text">
    <br>
    <h5>Change Food Calories:</h5>
    <input [(ngModel)]="food.calories" class="col-sm-4 input-sm" type="text">
    <br>
  </div>

  `
})

export class EditFoodDetailsComponent {
  public food: Food;
}
