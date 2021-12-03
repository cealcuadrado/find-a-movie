import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarMovieComponent } from './bar-movie.component';

describe('BarMovieComponent', () => {
  let component: BarMovieComponent;
  let fixture: ComponentFixture<BarMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
