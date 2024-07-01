import { User, UserComponent } from './user/user.component';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  private selectedUserId: string = 'u1';
  public users: User [] = DUMMY_USERS;

  public onSelectUser(id: string){
    this.selectedUserId = id;
  }

  get selectedUser(): any {
    return this.users.find(({id}) => id === this.selectedUserId)
  }
}
