import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  constructor(private taskService: TasksService){}
  @Input()
  public task?: Task;

  public completeTask(): void {
    this.taskService.removeTask(this.task!.id)
  }
}
