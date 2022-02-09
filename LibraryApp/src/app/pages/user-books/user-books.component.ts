import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Book } from '@app/models/book.module';
import { UserService } from '@app/shared/services/user/user.service';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.scss']
})
export class UserBooksComponent implements OnInit {
  id: number;

  @Input()
  queryParams: string;

  constructor(
    private route: ActivatedRoute,
    public userService: UserService
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
      }
      );

    this.userService.getUserBooks(this.id);
    this.userService.getUser(this.id);
  }

}
