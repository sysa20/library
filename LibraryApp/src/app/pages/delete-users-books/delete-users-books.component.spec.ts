import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUsersBooksComponent } from './delete-users-books.component';

describe('DeleteUsersBooksComponent', () => {
  let component: DeleteUsersBooksComponent;
  let fixture: ComponentFixture<DeleteUsersBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUsersBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUsersBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
