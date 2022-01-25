import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewSimilarToComponent } from './overview-similar-to.component';

describe('OverviewSimilarToComponent', () => {
  let component: OverviewSimilarToComponent;
  let fixture: ComponentFixture<OverviewSimilarToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewSimilarToComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewSimilarToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
