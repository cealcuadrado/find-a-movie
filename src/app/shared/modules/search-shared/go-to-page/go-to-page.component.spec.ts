import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToPageComponent } from './go-to-page.component';

describe('GoToPageComponent', () => {
  let component: GoToPageComponent;
  let fixture: ComponentFixture<GoToPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoToPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
