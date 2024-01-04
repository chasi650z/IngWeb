import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunidadesCComponent } from './oportunidades-c.component';

describe('OportunidadesCComponent', () => {
  let component: OportunidadesCComponent;
  let fixture: ComponentFixture<OportunidadesCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OportunidadesCComponent]
    });
    fixture = TestBed.createComponent(OportunidadesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
