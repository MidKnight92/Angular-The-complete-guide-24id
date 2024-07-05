import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { TasksComponent } from "./tasks.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [TaskComponent, AddTaskComponent, TasksComponent],
    exports: [TasksComponent],
    imports: [SharedModule, CommonModule, FormsModule]
})
export class TasksModule {

}