import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewSummaryComponent } from './crew-summary.component';

describe('CrewSummaryComponent', () => {
  let component: CrewSummaryComponent;
  let fixture: ComponentFixture<CrewSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrewSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
