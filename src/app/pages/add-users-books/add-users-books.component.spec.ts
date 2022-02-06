import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsersBooksComponent } from './add-users-books.component';

describe('AddUsersBooksComponent', () => {
  let component: AddUsersBooksComponent;
  let fixture: ComponentFixture<AddUsersBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUsersBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUsersBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
