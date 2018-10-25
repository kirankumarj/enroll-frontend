import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollReportComponent } from './enroll-report.component';

describe('EnrollReportComponent', () => {
  let component: EnrollReportComponent;
  let fixture: ComponentFixture<EnrollReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
