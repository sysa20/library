import { Component, OnInit } from '@angular/core';
import { User } from '@app/models/user.module';
import { UserService } from '../../shared/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  searchText = '';

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers();
  }
}
