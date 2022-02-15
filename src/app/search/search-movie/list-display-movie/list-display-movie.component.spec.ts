import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDisplayMovieComponent } from './list-display-movie.component';

describe('ListDisplayMovieComponent', () => {
  let component: ListDisplayMovieComponent;
  let fixture: ComponentFixture<ListDisplayMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDisplayMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDisplayMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
