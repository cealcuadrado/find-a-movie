import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSimilarComponent } from './movie-similar.component';

describe('MovieSimilarComponent', () => {
  let component: MovieSimilarComponent;
  let fixture: ComponentFixture<MovieSimilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSimilarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
