import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskMode } from 'src/app/core/enum/task-mode';
import { Task } from '../../core/model/task';

@Component({
  selector: 'app-rf-forms',
  templateUrl: './rf-forms.component.html',
  styleUrls: ['./rf-forms.component.scss'],
})
export class RfFormsComponent implements OnInit {
  @Input() mode = TaskMode.CREATE;
  @Output() taskEmit = new EventEmitter<Task>();
  taskMode = TaskMode;
  form!: FormGroup;
  tasks?: Task;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      taskName: [
        this.tasks?.taskName || '',
        [Validators.required, Validators.minLength(3)],
      ],
    });
  }

  saveTask() {
    this.taskEmit.emit(this.form.value);
  }
}
