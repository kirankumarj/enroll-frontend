import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollRegiterComponent } from './enroll-regiter.component';

describe('EnrollRegiterComponent', () => {
  let component: EnrollRegiterComponent;
  let fixture: ComponentFixture<EnrollRegiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollRegiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollRegiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
