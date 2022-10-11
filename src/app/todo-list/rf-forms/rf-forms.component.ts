import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TaskMode } from 'src/app/core/enum/task-mode';
import { Task } from '../../core/model/task';

@Component({
  selector: 'app-rf-forms',
  templateUrl: './rf-forms.component.html',
  styleUrls: ['./rf-forms.component.scss'],
})
export class RfFormsComponent implements OnInit {
  @Input() mode = TaskMode.CREATE;
  taskMode = TaskMode;
  form!: FormGroup;
  tasks?: Task;
  @Output() taskEmit = new EventEmitter<Task>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      taskName: this.tasks?.taskName || '',
    });
  }

  saveTask() {
    this.taskEmit.emit(this.form.value);
  }
}
