import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastAndCrewSummaryComponent } from './cast-and-crew-summary.component';

describe('CastAndCrewSummaryComponent', () => {
  let component: CastAndCrewSummaryComponent;
  let fixture: ComponentFixture<CastAndCrewSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastAndCrewSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastAndCrewSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
