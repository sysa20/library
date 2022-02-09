import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.module';
import { UserService } from '../../shared/services/user/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(
    public userService: UserService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.userService.postUser().subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    );
    window.alert('Your user has been added!');
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.userService.formData = new User();
  }
}