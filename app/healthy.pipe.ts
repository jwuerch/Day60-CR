import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food';

@Pipe({
  name: "healthy",
  pure: false
})

export class HealthyPipe implements PipeTransform {
  transform(input: Food[], args) {
    var desiredHealthyState = args[0];
    if(desiredHealthyState === "healthy") {
      return input.filter((food) => {
        return (food.healthy === true && food.calories < 300);
      });
    } else if (desiredHealthyState === "notHealthy") {
      return input.filter(function(food) {
        return (!food.healthy && food.calories > 300);
      });
    } else {
      return input;
    }
  }
}
