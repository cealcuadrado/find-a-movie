import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPosterComponent } from './header-poster.component';

describe('HeaderPosterComponent', () => {
  let component: HeaderPosterComponent;
  let fixture: ComponentFixture<HeaderPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPosterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
