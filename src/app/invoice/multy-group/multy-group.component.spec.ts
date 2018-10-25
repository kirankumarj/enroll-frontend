import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultyGroupComponent } from './multy-group.component';

describe('MultyGroupComponent', () => {
  let component: MultyGroupComponent;
  let fixture: ComponentFixture<MultyGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultyGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
