import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHeaderComponent } from './movie-header.component';

describe('MovieHeaderComponent', () => {
  let component: MovieHeaderComponent;
  let fixture: ComponentFixture<MovieHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
