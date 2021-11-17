import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCrewComponent } from './movie-crew.component';

describe('MovieCrewComponent', () => {
  let component: MovieCrewComponent;
  let fixture: ComponentFixture<MovieCrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCrewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
