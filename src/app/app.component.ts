import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './user/user.model';



@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  public selectedUserId?: string;
  public users: User [] = DUMMY_USERS;

  public onSelectUser(id: string){
    this.selectedUserId = id;
  }

  get selectedUser(): User | undefined {
    return this.users.find(({id}) => id === this.selectedUserId)
  }
}
