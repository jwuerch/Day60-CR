import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task';
import {capitalize} from './task';
import {AppComponent} from './app.component';

@Component({
  selector: 'new-task',
  outputs: ['emitTasks'],
  template: `
  <h2>Add New Task</h2>
  <input placeholder= "Add A New Task Here" #newInput>
  <button (click)="newCapTask(newInput.value)">Add New Task</button>
  `
})

export class NewTaskComponent {
  public newTasks: Task[] = [];
  public emitTasks: EventEmitter<Task[]>;
  constructor() {
    this.emitTasks = new EventEmitter();
  }
  newCapTask(inputDescription: string) {
    this.newTasks = [];
    var newTask = new Task(inputDescription, 5);
    capitalize(newTask);
    this.newTasks.push(newTask);
    this.emitTasks.emit(this.newTasks);
  }

}
