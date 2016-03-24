export class Task {
  public done: boolean = false;
  public points: number = 0;
  constructor(public description: string, public id: number) {

  }

}

export function capitalize(task: Task) {
  task.description = task.description.toUpperCase();
}
