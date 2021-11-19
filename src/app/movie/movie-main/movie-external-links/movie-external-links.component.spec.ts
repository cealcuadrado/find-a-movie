import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieExternalLinksComponent } from './movie-external-links.component';

describe('MovieExternalLinksComponent', () => {
  let component: MovieExternalLinksComponent;
  let fixture: ComponentFixture<MovieExternalLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieExternalLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieExternalLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
