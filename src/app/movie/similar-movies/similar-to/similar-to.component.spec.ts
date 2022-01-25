import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarToComponent } from './similar-to.component';

describe('SimilarToComponent', () => {
  let component: SimilarToComponent;
  let fixture: ComponentFixture<SimilarToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarToComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
