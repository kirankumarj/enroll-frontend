import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiGroupComponent } from './multi-group.component';

describe('MultiGroupComponent', () => {
  let component: MultiGroupComponent;
  let fixture: ComponentFixture<MultiGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
