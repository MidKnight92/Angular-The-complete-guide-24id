import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  public selectedUser = DUMMY_USERS[this.getRandomeUser()]

  private getRandomeUser(): number {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }
}
