import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerButtonComponent } from './logger-button.component';

describe('LoggerButtonComponent', () => {
  let component: LoggerButtonComponent;
  let fixture: ComponentFixture<LoggerButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoggerButtonComponent]
    });
    fixture = TestBed.createComponent(LoggerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
