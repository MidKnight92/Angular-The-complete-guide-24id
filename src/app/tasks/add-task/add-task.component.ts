import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksComponent } from '../tasks.component';
import { Task } from '../task/task.model';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: false,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
  export class AddTaskComponent {
    constructor(private taskService:TasksService){}

  @Input()
  public task?: Task;

  @Input()
  public userId!: string; 

  @Output()
  public isCanceledOrClosed = new EventEmitter();

  public enteredTitle = '';
  public enteredSummary = '';
  public enteredDate = '';

  public addNewTask(task: Task): void {
    this.task = task;
  }

  public cancelOrCloseTask(): void {
    this.isCanceledOrClosed.emit(false);
  }

  public onSubmit(){
    this.taskService.addTask({title: this.enteredTitle, summary: this.enteredSummary, dueDate: this.enteredDate}, this.userId);
    this.isCanceledOrClosed.emit(false);
  }
}
