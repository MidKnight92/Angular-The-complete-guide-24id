import { Component, Input } from '@angular/core';
import {TasksComponent } from '../tasks.component';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input()
  public task?: Task;
}
