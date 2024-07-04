import { Component, EventEmitter, Input, Output } from '@angular/core';
import {TasksComponent } from '../tasks.component';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent, CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input()
  public task?: Task;

  @Output()
  public complete = new EventEmitter<string>();

  public completeTask(): void {
    console.log(this.task?.id)
    return this.complete.emit(this.task!.id);
  }

}
