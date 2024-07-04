import { Component, EventEmitter, Input, Output } from '@angular/core';
import {TasksComponent } from '../tasks.component';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent, CardComponent, DatePipe],
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
