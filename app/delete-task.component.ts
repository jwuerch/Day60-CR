import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task';
import {AppComponent} from './app.component';

@Component({
  selector: 'delete-task',
  outputs: ['emitDeleteTask'],
  template:
  `
  <button>Delete</button>
  `
})

export class DeleteTaskComponent {
  public emitDeleteTask: EventEmitter<Task>;
  constructor() {
    this.emitDeleteTask = new EventEmitter();
  }
}
