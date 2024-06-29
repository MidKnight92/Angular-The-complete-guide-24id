import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  public selectedUser: WritableSignal<any> = signal(DUMMY_USERS[this.getRandomUser()]);

  public imagePath: Signal<string> = computed(()=> `assets/users/${this.selectedUser().avatar}`)

  public getSelectedUser(){
    this.selectedUser.set(DUMMY_USERS[this.getRandomUser()]);
  }

  private getRandomUser(): number {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }

}
