export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) {

  }

}

export function capitalize(task: Task) {
  task.description = task.description.toUpperCase();
}
