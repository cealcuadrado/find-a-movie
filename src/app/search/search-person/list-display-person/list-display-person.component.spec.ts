import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDisplayPersonComponent } from './list-display-person.component';

describe('ListDisplayPersonComponent', () => {
  let component: ListDisplayPersonComponent;
  let fixture: ComponentFixture<ListDisplayPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDisplayPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDisplayPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
