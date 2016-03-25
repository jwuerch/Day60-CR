import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food';
import {FoodListComponent} from './food-list.component';
import {EditFoodNameComponent} from './edit-food-name.component';


@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template:
  `
  <div class="container">
    <h1 class="text-primary">Welcome To Your Food App</h1>
    <br>
    <food-list></food-list>
  </div>
  `
})

export class AppComponent {

}
