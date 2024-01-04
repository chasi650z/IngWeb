import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCComponent } from './reporte-c.component';

describe('ReporteCComponent', () => {
  let component: ReporteCComponent;
  let fixture: ComponentFixture<ReporteCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReporteCComponent]
    });
    fixture = TestBed.createComponent(ReporteCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
