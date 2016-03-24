import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task';
import {capitalize} from './task';
import {NewTaskComponent} from './new-task.component';
import {TaskListComponent} from './task-list.component';


@Component({
  selector: 'my-app',
  directives: [NewTaskComponent, TaskListComponent],
  template: `
  <h1>hi</h1>
  <task-list></task-list>

  `
})

export class AppComponent {

}
