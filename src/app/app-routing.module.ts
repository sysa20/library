import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersBooksComponent } from './pages/add-users-books/add-users-books.component';
import { BooksComponent } from './pages/books/books.component';

import { HomeComponent } from './pages/home/home.component';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { UsersComponent } from './pages/users/users.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: UsersComponent,
    pathMatch: 'full',
  },
  {
    path: 'users/new',
    component: NewUserComponent,
    pathMatch: 'full',
  },
  {
    path: 'users/add-users-books',
    component: AddUsersBooksComponent,
    pathMatch: 'full',
  },
  {
    path: 'books',
    component: BooksComponent,
    pathMatch: 'full',
  },
  {
    path: 'books/new',
    component: NewBookComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
