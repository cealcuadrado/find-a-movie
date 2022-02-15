import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDisplayPersonComponent } from './grid-display-person.component';

describe('GridDisplayPersonComponent', () => {
  let component: GridDisplayPersonComponent;
  let fixture: ComponentFixture<GridDisplayPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridDisplayPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDisplayPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
