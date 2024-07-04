import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTask, Task } from './task/task.model';
import { AddTaskComponent } from './add-task/add-task.component';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  constructor(private taskService: TasksService){}

  @Input()
  public name?: string;

  @Input()
  public selectedUserId!: string;

  public isAddNewTask = false;


  get selectedUsersTasks(): Task[]{
    return this.taskService.getUserTasksById(this.selectedUserId);
  }

  public removeCompletedTask(taskId: string){
    this.taskService.removeTask(taskId);
  }

  public addTask(): void {
    this.isAddNewTask = true;
  }

  public closeAddTask(bool: boolean){
    this.isAddNewTask = bool;
  }

  public addNewTask(input: NewTask){
    this.taskService.addTask(input, this.selectedUserId);
    this.isAddNewTask = false;
  }

}

