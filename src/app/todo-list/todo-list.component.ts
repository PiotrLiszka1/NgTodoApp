import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TaskMode } from '../core/enum/task-mode';
import { Task } from '../core/model/task';
import { TaskService } from '../core/service/task.service';
import { RfFormsComponent } from './rf-forms/rf-forms.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  tasks$ = this.taskService.getTask();

  constructor(
    private modalService: NgbModal,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {}

  openAddForm(): void {
    const modalRef = this.modalService.open(RfFormsComponent);
    modalRef.componentInstance.taskEmit.subscribe((saveTask: Task) => {
      this.taskService.addTask(saveTask);
      modalRef.close();
    });
  }

  openEditForm(oneTask: Task, i: number): void {
    const modalRef = this.modalService.open(RfFormsComponent);
    modalRef.componentInstance.mode = TaskMode.UPDATE;
    modalRef.componentInstance.tasks = oneTask;
    modalRef.componentInstance.taskEmit.subscribe((taskSave: Task) => {
      this.taskService.editTask(taskSave, i);
      modalRef.close();
    });
  }

  removeTask(i: number): void {
    const conf = confirm('Na pewno chcesz usunąć zadanie z listy ? ');
    if (conf) {
      this.taskService.removeTask(i);
    }
  }

  doneTask(i: number): void {
    this.taskService.doneTask(i);
  }
}
