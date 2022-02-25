import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonResultComponent } from './list-person-result.component';

describe('ListPersonResultComponent', () => {
  let component: ListPersonResultComponent;
  let fixture: ComponentFixture<ListPersonResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPersonResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersonResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
