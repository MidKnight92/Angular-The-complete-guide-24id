import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';

interface Task {
  id: string,
  userId: string
  title: string,
  summary: string,
  dueDate: string
 }

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input()
  public name?: string;
  public tasks: Task[] = dummyTasks;

}
