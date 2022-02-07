import { Component, OnInit } from '@angular/core';
import { User } from '@app/models/user.module';
import { UserService } from '../../shared/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users = this.userService.getUsers();
  searchText = '';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void { }
}
