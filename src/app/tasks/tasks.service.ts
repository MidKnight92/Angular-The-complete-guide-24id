import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";
import { generateUniqueId } from "../utils/utils";
import { NewTask, Task } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks: Task[] = dummyTasks;

    public getUserTasksById(selectedUserId: string) {
        return this.tasks.filter(({userId}) => userId === selectedUserId);
    }

    public addTask(input: NewTask, selectedUserId: string): void {
         this.tasks.push({
            id: generateUniqueId(),
            userId: selectedUserId,
            ...input
          })
    }

    public removeTask(taskId: string) {
        this.tasks = [...this.tasks].filter(({id}) => id !== taskId);
    }

}