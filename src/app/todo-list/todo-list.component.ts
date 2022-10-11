import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from '../core/model/task';
import { RfFormsComponent } from './rf-forms/rf-forms.component';

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
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openAddForm() {
    const modalRef = this.modalService.open(RfFormsComponent);
    modalRef.componentInstance.taskEmit.subscribe((saveTask: Task) => {
      this.tasks.push(saveTask);
      modalRef.close();
    });
  }

  openEditForm(oneTask: Task, i: number) {
    const modalRef = this.modalService.open(RfFormsComponent);
    modalRef.componentInstance.tasks = oneTask;
    modalRef.componentInstance.taskEmit.subscribe((taskSave: Task) => {
      this.tasks[i] = taskSave;

      modalRef.close();
    });
  }

  removeTask(i: number) {
    this.tasks.splice(i, 1);
  }
}
