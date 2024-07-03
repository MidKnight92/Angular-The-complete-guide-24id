import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { Task } from './task/task.model';
import { AddTaskComponent } from './add-task/add-task.component';



@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input()
  public name?: string;

  @Input()
  public selectedUserId?: string;

  public isAddNewTask = false;

  public tasks: Task[] = dummyTasks;

  get selectedUsersTasks(): Task[] | undefined{
    return this.tasks.filter(({userId}) => userId === this.selectedUserId);
  }

  public removeCompletedTask(taskId: string){
    this.tasks = [...this.tasks].filter(({id}) => id === taskId);
  }

  public addTask(): void {
    this.isAddNewTask = true;
  }

  public closeAddTask(bool: boolean){
    this.isAddNewTask = bool;
  }
}

