import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMovieFoundComponent } from './no-movie-found.component';

describe('NoMovieFoundComponent', () => {
  let component: NoMovieFoundComponent;
  let fixture: ComponentFixture<NoMovieFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoMovieFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoMovieFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
