import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfSettingComponent } from './pdf-setting.component';

describe('PdfSettingComponent', () => {
  let component: PdfSettingComponent;
  let fixture: ComponentFixture<PdfSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
