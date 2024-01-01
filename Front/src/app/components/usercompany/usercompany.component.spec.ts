import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercompanyComponent } from './usercompany.component';

describe('UsercompanyComponent', () => {
  let component: UsercompanyComponent;
  let fixture: ComponentFixture<UsercompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsercompanyComponent]
    });
    fixture = TestBed.createComponent(UsercompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
