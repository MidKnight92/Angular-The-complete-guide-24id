import { Component, Input } from '@angular/core';
import { TasksComponent } from '../tasks.component';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [TasksComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
  export class AddTaskComponent {
  @Input()
  public task?: Task;

  public addNewTask(task: Task): void{
    this.task = task;
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