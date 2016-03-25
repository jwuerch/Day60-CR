import {Food} from './food';
import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'display-food-healthy',
  inputs: ['food'],
  template:
  `display-healthy
  <div>
    <div *ngIf="food.healthy">
      Healthy?: <input type="checkbox" checked (click)="toggleHealthy(false)">
    </div>
    <div *ngIf="!food.healthy" >
      Healthy?: <input type="checkbox" (click)="toggleHealthy(true)">
    </div>
  </div>
  `
})

export class DisplayFoodHealthyComponent {
  public food: Food;
  public onFoodSubmit: EventEmitter<Food>;
  constructor() {
    this.onFoodSubmit = new EventEmitter();
  }
  toggleHealthy(setState:boolean) {
    this.food.healthy=setState;
  }
}
