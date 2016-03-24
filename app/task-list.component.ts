import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task';
import {capitalize} from './task';
import {NewTaskComponent} from './new-task.component';
import {DeleteTaskComponent} from './delete-task.component';
import {AppComponent} from './app.component';
import {EditTaskComponent} from './edit-task.component'

@Component({
  selector: 'task-list',
  inputs: ['newtasks'],
  directives: [DeleteTaskComponent, NewTaskComponent, EditTaskComponent],
  template: `
    <new-task
      (emitTasks)="concatArrays($event)">
    </new-task>
    <h3
      *ngFor="#task of newtasks"
      (click)="selectTask(task)">
      <h1>
      {{task.description}}
      </h1>
      <delete-task
        (click) ="taskDeleted(task)">
      </delete-task>
    </h3>
    <edit-task
     *ngIf = "selectedTask" [task] = "selectedTask">
    </edit-task>
  `
})

export class TaskListComponent {
  public newtasks: Task[] = [];
  public selectedTask: Task;
  constructor() {
    this.newtasks = [
      new Task("New", 0),
      new Task("Learn Kung Fu", 1),
      new Task("Learn Kung Fu", 2),
      new Task("Create To-Do List app.", 3)
    ]
  }
  concatArrays(newTasks: Task[]): void {
    this.newtasks = this.newtasks.concat(newTasks);
    console.log(this.newtasks);
  }
  taskDeleted(taskSelected) {
    function callBack(value, index, array) {
      if (taskSelected !== value) {
        return taskSelected;
      };
    };
    this.newtasks = this.newtasks.filter(callBack);
  }
  selectTask(clicked: Task): void {
    this.selectedTask = clicked;
    console.log("got it");
    console.log("selected task: " + this.selectedTask.description);

  }
}
