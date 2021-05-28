import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSocialNetworksComponent } from './movie-social-networks.component';

describe('MovieSocialNetworksComponent', () => {
  let component: MovieSocialNetworksComponent;
  let fixture: ComponentFixture<MovieSocialNetworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSocialNetworksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSocialNetworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
