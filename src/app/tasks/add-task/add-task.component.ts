import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksComponent } from '../tasks.component';
import { Task } from '../task/task.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [TasksComponent, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
  export class AddTaskComponent {
  @Input()
  public task?: Task;

  @Output()
  public isCanceled = new EventEmitter();

  public enteredTitle = '';
  public enteredSummary = '';
  public enteredDate = '';

  public addNewTask(task: Task): void {
    this.task = task;
  }

  public cancelTask(): void {
    this.isCanceled.emit(false);
  }
}


/*
   const newTaskValue = {
      id: 't4',
      userId: 'userId4',
      title: 'Add new task',
      summary: 'Add new component and render to screen.',
      dueDate: '2024-07-02'
     }
*/