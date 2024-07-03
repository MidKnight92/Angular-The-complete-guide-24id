import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TasksComponent } from '../tasks.component';
import { NewTask, Task } from '../task/task.model';
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

  @Output()
  public newTask = new EventEmitter<NewTask>();

  public enteredTitle = '';
  public enteredSummary = '';
  public enteredDate = '';

  public addNewTask(task: Task): void {
    this.task = task;
  }

  public cancelTask(): void {
    this.isCanceled.emit(false);
  }

  public onSubmit(){
    this.newTask.emit({title: this.enteredTitle, summary: this.enteredSummary, dueDate: this.enteredDate})
  }
}
