import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayModeComponent } from './display-mode.component';

describe('DisplayModeComponent', () => {
  let component: DisplayModeComponent;
  let fixture: ComponentFixture<DisplayModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
