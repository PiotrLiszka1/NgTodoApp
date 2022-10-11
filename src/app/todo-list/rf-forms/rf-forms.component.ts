import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from '../../core/model/task';

@Component({
  selector: 'app-rf-forms',
  templateUrl: './rf-forms.component.html',
  styleUrls: ['./rf-forms.component.scss'],
})
export class RfFormsComponent implements OnInit {
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
