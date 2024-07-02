import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true})
  public user!: User;

  @Input()
  public isActive?: boolean;

  @Output()
  public select = new EventEmitter();

  get imagePath(): string{
    return `/assets/users/${this.user.avatar}`;
  }

  public getSelectedUser(): void{
    this.select.emit(this.user.id);
  }

}
