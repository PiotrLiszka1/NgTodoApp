import { Component, OnInit } from '@angular/core';
import { Task } from '../core/model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
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

  ngOnInit(): void {}
}
