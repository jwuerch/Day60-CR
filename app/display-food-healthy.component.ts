import {Food} from './food';
import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'display-food-healthy',
  inputs: ['food'],
  template:
  `
  <div>
    <div *ngIf="food.healthy">
      <div>Healthy: <input type="checkbox" checked (click)="toggleHealthy(false)"></div>
    </div>
    <div *ngIf="!food.healthy" >
      <div>Healthy: <input type="checkbox" (click)="toggleHealthy(true)"></div>
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
