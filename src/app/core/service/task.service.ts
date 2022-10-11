import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks$ = new BehaviorSubject<Task[]>([
    {
      taskName: 'Kupić kawę.',
      taskComplete: false,
    },
    {
      taskName: 'Przykręcić obraz.',
      taskComplete: false,
    },
  ]);

  constructor() {}

  getTask(): Observable<Task[]> {
    return this.tasks$.asObservable();
  }

  addTask(task: Task): void {
    const taskValue = this.tasks$.getValue();
    taskValue.push(task);
    this.tasks$.next(taskValue);
  }

  editTask(task: Task, i: number): void {
    const taskValue = this.tasks$.getValue();
    taskValue[i] = task;
    this.tasks$.next(taskValue);
  }

  removeTask(i: number): void {
    const taskValue = this.tasks$.getValue();

    taskValue.splice(i, 1);
    this.tasks$.next(taskValue);
  }

  doneTask(i: number): void {
    const taskValue = this.tasks$.getValue();
    taskValue.forEach((done, id) => {
      if (i === id) {
        done.taskComplete = !done.taskComplete;
      }
    });
    this.tasks$.next(taskValue);
  }
}
