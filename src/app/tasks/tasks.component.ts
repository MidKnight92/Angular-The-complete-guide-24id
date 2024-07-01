import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { Task } from './task/task.model';



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

  @Input()
  public selectedUserId?: string;

  public tasks: Task[] = dummyTasks;

  get selectedUsersTasks(): Task[] | undefined{
    return this.tasks.filter(({userId}) => userId === this.selectedUserId);
  }

}
