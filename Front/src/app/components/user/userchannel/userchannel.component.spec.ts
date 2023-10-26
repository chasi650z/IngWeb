import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserchannelComponent } from './userchannel.component';

describe('UserchannelComponent', () => {
  let component: UserchannelComponent;
  let fixture: ComponentFixture<UserchannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserchannelComponent]
    });
    fixture = TestBed.createComponent(UserchannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
