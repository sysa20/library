import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { BackButtonComponent } from './shared/back-button/back-button.component';
import { BooksComponent } from './pages/books/books.component';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './pages/new-user/new-user.component';
import { AddUsersBooksComponent } from './pages/add-users-books/add-users-books.component';
import { DeleteUsersBooksComponent } from './pages/delete-users-books/delete-users-books.component';
import { SearchPipe } from './shared/pipe/search.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    BackButtonComponent,
    BooksComponent,
    NewBookComponent,
    NewUserComponent,
    AddUsersBooksComponent,
    DeleteUsersBooksComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
