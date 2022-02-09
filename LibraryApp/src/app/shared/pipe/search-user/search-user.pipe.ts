import { Pipe, PipeTransform } from '@angular/core';
import { User } from '@app/models/user.module';

@Pipe({
  name: 'searchUserPipe'
})
export class SearchUserPipe implements PipeTransform {

  transform(users: User[], searchText: string): unknown {
    if (!users) {
      return [];
    }
    if (!searchText) {
      return users;
    }

    return users.filter((user: User) =>
      user.first_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
      user.last_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
    );
  }

}
