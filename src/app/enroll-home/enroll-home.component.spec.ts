import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollHomeComponent } from './enroll-home.component';

describe('EnrollHomeComponent', () => {
  let component: EnrollHomeComponent;
  let fixture: ComponentFixture<EnrollHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
