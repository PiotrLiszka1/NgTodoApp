import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    {
      taskName: 'Kupić kawę.',
      taskComplete: false,
    },
    {
      taskName: 'Zadzwonić gdzieś tam.',
      taskComplete: false,
    },
  ];

  constructor() {}

  getTask() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  editTask(task: Task, i: number) {
    this.tasks[i] = task;
  }

  removeTask(i: number) {
    this.tasks.splice(i, 1);
  }

  doneTask(i: number) {
    this.tasks.forEach((done, id) => {
      if (i === id) {
        done.taskComplete = !done.taskComplete;
      }
    });
  }
}
