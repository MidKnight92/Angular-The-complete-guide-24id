import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true})
  public avatar!: string;

  @Input({required: true})
  public name!: string;

  @Input({required: true})
  public id!: string;

  @Output()
  public select = new EventEmitter();

  get imagePath(): string{
    return `/assets/users/${this.avatar}`;
  }

  public getSelectedUser(): void{
    this.select.emit(this.id);
  }

}
