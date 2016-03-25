import {Component} from 'angular2/core';
import {Food} from './food';

@Component({
  selector: 'edit-food-name',
  inputs: ['food'],
  template:
  `
  <div class="edit-food-name">
  <h5>Change Food Name:</h5>
  <h5>Change Food Details:</h5>
    <input [(ngModel)]="food.name" class="col-sm-4 input-sm">
  </div>
  `

})

export class EditFoodNameComponent{
  public food: Food;
}
