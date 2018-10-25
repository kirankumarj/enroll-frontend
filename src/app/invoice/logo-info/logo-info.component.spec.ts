import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoInfoComponent } from './logo-info.component';

describe('LogoInfoComponent', () => {
  let component: LogoInfoComponent;
  let fixture: ComponentFixture<LogoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
