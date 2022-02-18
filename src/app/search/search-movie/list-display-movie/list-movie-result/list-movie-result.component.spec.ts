import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieResultComponent } from './list-movie-result.component';

describe('ListMovieResultComponent', () => {
  let component: ListMovieResultComponent;
  let fixture: ComponentFixture<ListMovieResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMovieResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMovieResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
