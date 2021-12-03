import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastSummaryComponent } from './cast-summary.component';

describe('CastSummaryComponent', () => {
  let component: CastSummaryComponent;
  let fixture: ComponentFixture<CastSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CastSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CastSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
