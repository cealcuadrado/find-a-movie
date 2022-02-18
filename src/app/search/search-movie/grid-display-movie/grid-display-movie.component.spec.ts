import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDisplayMovieComponent } from './grid-display-movie.component';

describe('GridDisplayMovieComponent', () => {
  let component: GridDisplayMovieComponent;
  let fixture: ComponentFixture<GridDisplayMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridDisplayMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDisplayMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
