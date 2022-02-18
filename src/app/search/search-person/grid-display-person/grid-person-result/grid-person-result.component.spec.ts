import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPersonResultComponent } from './grid-person-result.component';

describe('GridPersonResultComponent', () => {
  let component: GridPersonResultComponent;
  let fixture: ComponentFixture<GridPersonResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPersonResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPersonResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
