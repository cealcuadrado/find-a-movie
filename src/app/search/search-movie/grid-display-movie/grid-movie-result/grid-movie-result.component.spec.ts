import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMovieResultComponent } from './grid-movie-result.component';

describe('GridMovieResultComponent', () => {
  let component: GridMovieResultComponent;
  let fixture: ComponentFixture<GridMovieResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridMovieResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridMovieResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
