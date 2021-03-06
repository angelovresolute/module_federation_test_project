import { Component } from '@angular/core';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users = [
    { username: 'Pesho', name: 'Pesho Peshev' },
    { username: 'Gosho', name: 'Gosho Peshev' },
    { username: 'Tosho', name: 'Tosho Toshev' },
    { username: 'Aleksandar', name: 'Aleksandar Aleksandrov' },
    { username: 'Gabi', name: 'Gabi Tsenkova' },
  ];
  userResults = this.users;

  constructor(private shared: SharedLibService) {
    this.shared.someData = "asdasdasd";
  }

  searchUsers(e): void {
    this.userResults = this.users.filter(x => x.username.toLowerCase().includes(e.target?.value?.toLowerCase() || ''));
  }
}
