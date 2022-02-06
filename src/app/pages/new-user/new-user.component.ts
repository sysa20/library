import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.module';
import { UserService } from '../../shared/services/user/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  entity: User = new User();
  entityForm: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.entityForm = new FormGroup({
      first_name: new FormControl(),
      last_name: new FormControl(),
      has_lent: new FormControl(false),
      lent_books: new FormControl([''])
    })
  }

  ngOnInit(): void {
  }

  submit(event: Event, entity: User): void {
    event.preventDefault();
    entity.has_lent = false;
    entity.lent_books = [];
    console.log(entity);
    this.userService.addUser(entity);
    window.alert('Your user has been added!');
    this.router.navigate(['./users']);
  }
}